//We're using strict mode for JavaScript
'use strict';

//required for any Mongoose Model / Document
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//we create the schema
var User = new Schema({
    document: String,
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    password: String,
    profile_image: String
});

//let's export the model
module.exports = mongoose.model('User', User);