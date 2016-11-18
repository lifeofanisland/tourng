var e = require('../models/Head_Buffer');
var c = require('../models/Contents');
//
module.exports = e.buffer_base_controller.extend({
    //
    username: "admin",
    password: "admin",
    //
    run: function (req, res, next) {
        //
        var self = this;
        //
        if(this.auth(req)) {
            //
            req.session.loggedin = true;
            req.session.save();
            //
            if (typeof req.body.form !== 'undefined' && typeof req.body.type !== 'undefined') {
                //
                var type = req.body.type;
                //
                self.save(type, function (result) {
                    //
                    self.exit(req, result, res);
                    //
                });

            } else {
                //
                self.exit(req, '', res);
                //
            }
            //
        }else{
            //
            res.render('login');
        }
    },
    //
    auth: function(req) {
        return (
                req.session &&
                req.session.loggedin &&
                req.session.loggedin === true
            )|| (
                req.body &&
                req.body.username === this.username &&
                req.body.password === this.password
            );
    },
    //
    exit: function (req, result, res) {
        //
        res.render('home.hjs', {
            result: result,
            body: this.content(req).body,
            title: this.content(req).title

        });
    },
    //
    save: function (req, callback) {
        //
        var data;
        //
        if (req == "places") {
            //
            data = this.places(req);
            //
        }
        //
        e.model[req].create(data, function (err, response) {
            //
            if (err) {
                //
                callback('An error has occured');
            } else {
                //
                callback(this.returnsave(req));
            }

        });
        //
    },
    //
    getimages: function (req) {
        //
        var img_info = JSON.stringify(req.files.picture);
        //
        if (img_info.size == 0 || img_info.name == '') {
            //
            return req.body.currentpicture || '';
        }
        //
        var images = [];
        //
        req.files.picture.forEach(function (element) {
            //
            var data = fs.readFileSync(element.path);
            var image_id = crypto.randomBytes(23).toString('hex');
            var img_name = "/uploads/images/" + Date.now() + "_" + image_id + "_" + element.name;
            var newPath = "./public" + img_name;
            fs.writeFileSync(newPath, data);
            images.push(imgname);
        });
        //
        return images;
        //
    },
    //
    returnsave: function (req) {
        //
        switch (req) {
            case "places":
                return 'Place successfully saved';
                break;
        }

    },
    //
    places: function (req) {
        //
        var data = {
            //
            title: req.body.title,
            description: req.body.description,
            activities: req.body.activities,
            address: req.body.address,
            contact: req.body.contact,
            images: this.getimages(req),
            created: e.model.datetimenow
        }
        //
        return data;
    },
    //
    content: function (req) {
        //
        var data;
        var content;
        var title;
        //
        var page = req.params.id;
        //
        if(page == "home"){
            //
            content = c.overview();
            title = 'Overview';
            //
        } else if(page == "addplace") {
            //
            content = c.addplace();
            title = 'Places';
            //
        } else if(page == "addbeach"){
            //
            content = c.addbeach();
            title = 'Beach';
        } else if(page == "addevent"){
            //
            content = c.addevent();
            title = 'Events';
            //
        } else if(page == "adddeal"){
            //
            content = c.adddeal();
            title = "Travel Deals";
        }
        //
        data = {
            body:content,
            title:title
        }
        //
        return data;
    }
});
