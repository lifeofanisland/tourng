var BaseController = require("./Base");
var safetee = require("../models/Model");
var safetee_response = require('../models/Response');
var globalname = safetee_response.getresponse['page_title']('index');

module.exports = BaseController.extend({
    //
    run: function(req, res, next) {
        //
        safetee_response.returnresponse['render'](req,'test',{
            title: globalname
        },res);
        //
    }
});