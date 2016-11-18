var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = require("./Base");
var crypto = require("crypto");
//
var currentdate = new Date();
var datetimenow_ = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + " "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
//
var PlacesSchema = new Schema ({
    title: String,
    description: String,
    activities: String,
    images: String,
    address: String,
    contact: String,
    created: String
})

//
var places_ = mongoose.model('places', PlacesSchema);
//
module.exports = {
    datetimenow:datetimenow_,
    places: places_
}