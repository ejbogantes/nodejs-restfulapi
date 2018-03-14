//We use strict from JS
'use strict';

//Required modules
const config = require('../../../config/_config');
const mongoose = require('mongoose');
const fn = require('../functions');

//Mongo Params
const conn = config.databaseConns.mongodb;

//Connection String 
var connString = 'mongodb://x';
connString += conn.host + ':';
connString += conn.port + '/' + conn.name;

//Connection Options
const connOptions = {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
};

//Here we export the module
module.exports = {

    //This is the save and update function
    save: async function (options, callback) {

        //Let's connect to mongodb
        mongoose.connect(connString, function (err) {

            //if there
            if (err) {
                callback(new Error(err));
            } else {

                //Build the Mongoose Schema
                const Schema = mongoose.Schema(fn.buildSchema(options.schema));

                //Generate the model
                const Model = mongoose.model(options.table, Schema);

                //Create the object
                let Obj = new Model(options.attributes);

                //Try to save / update the record
                Obj.save(function (err, result) {

                    //if there is an error then return it
                    if (err) {
                        callback(new Error(err));
                    } else {
                        //if a response is received
                        callback(result);
                    }

                });
            }
        });

    },

    //This is the delete function
    delete: function (id, callback) {

    },
    //This is the find function
    find: function (id, callback) {

    }
};