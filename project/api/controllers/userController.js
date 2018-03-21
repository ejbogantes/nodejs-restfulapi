//We're using strict mode for JavaScript
'use strict';

//required files
const mongoose = require('mongoose');

//Here we declare the functions for the UserController
var UserController = {

    //All GET functions
    get: {
        index: function (req, res) {
            res.send('This function is not implemented!');
        },
        create: function (req, res) {
            res.send('This function is not implemented!');
        },
        show: function (req, res) {

            res.send('This function is not implemented!');
        },
        edit: function (req, res) {
            res.send('This function is not implemented!');
        }
    },

    //All POST functions
    post: {
        store: function (req, res) {
            var userModel = mongoose.model('User');
            userModel.create({
                document: '207010082',
                first_name: 'Emilio',
                last_name: 'Bogantes',
                username: 'ejbogantes',
                email: 'ejbogantes@gmail.com',
                password: '1234',
                profile_image: ''
            }, function (err, small) {
                if (err) res.sendStatus(400);

                res.sendStatus(200);
            });
        }
    },

    //All PUT/PATCH functions
    put: {
        update: function (req, res) {
            res.send('This function is not implemented!');
        }
    },

    //All DELETE functions
    delete: {
        destroy: function (req, res) {
            res.send('This function is not implemented!');
        }
    }
};

module.exports = UserController;