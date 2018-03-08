'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({


});

//Here we export the model
module.exports = mongoose.model('User', User);