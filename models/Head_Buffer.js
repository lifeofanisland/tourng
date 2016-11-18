var BaseController = require("../controllers/Base");
var model = require("./Model");
var response_buffer = require('./Response');
var upload_dir = require('./Upload_Dir');
var get_vars = require('./Vars');
var crypto = require('crypto');
var fs = require('fs');
var return_data = '';
//
module.exports = {
    buffer_base_controller:BaseController,
    model:model,
    buffer_response:response_buffer,
    buffer_dir:upload_dir,
    buffer_var:get_vars,
    buffer_crypto:crypto,
    buffer_filesync:fs,
    buffer_return_data:return_data
}