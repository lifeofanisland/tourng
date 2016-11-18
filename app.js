var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config')();
var app = express();
var mongoose = require('mongoose');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var db = 'tourng';
var store = new MongoDBStore(
    {
        uri: 'mongodb://' + config.mongo.host + ':' + config.mongo.port + '/'+db,
        collection: 'mySessions',
        clear_interval: 3600
    });
//
var Index = require('./controllers/Index');
var ContentDriver = require('./controllers/ContentDriver');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/templates');
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('safetee-backend'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({src: __dirname + '/public'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({
    secret: 'elyon_production_backend_rocks_!!!!',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    },
    store: store,
    resave: false,
    saveUninitialized: true
}));
//
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
//
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/'+db, function (err, db) {
    if (err) {
        console.log('Sorry, there is no mongo db server running.');
    } else {

        //
        app.all('/', function (req, res, next) {
            Index.run(req, res, next);
        });
        //
        app.all('/app/:id',  function (req, res, next) {
            ContentDriver.run(req, res, next);
        });
        //
        http.createServer(app).listen(app.get('port'), function () {
            console.log(
                'Successfully connected to mongodb://' + config.mongo.host + ':' + config.mongo.port,
                '\nServer listening on port 3000'
            );
        });
    }
});