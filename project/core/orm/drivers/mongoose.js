//We use strict from JS
'use strict';

//Required modules
const config = require('../../../config/_config');
const mongoose = require('mongoose');
const fn = require('../functions');

//Mongo Params
const conn = config.databaseConns.mongodb;

//Connection String 
var connString = 'mongodb://';
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
    save: function (options) {

        //We use a promise to handle the function
        return new Promise(function (resolve, reject) {

            //Let's connect to mongodb
            mongoose.connect(connString, connOptions).then(
                () => {

                    //Build the Mongoose Schema
                    const Schema = mongoose.Schema(fn.buildSchema(options.schema));

                    //Generate the model
                    const Model = mongoose.model(options.table, Schema);

                    //Create the object
                    let Obj = new Model(options.attributes);


                    //Check if the record exists or not
                    Model.count({ _id: Obj._id }, function (err, count) {

                        if (err) {
                            //if there is an error then return it
                            reject(new Error(err));
                        }

                        if (count > 0) {
                           
                            //Try to update the existing new record
                            Obj.update(options.attributes, function (err, result) {
                                if (err) {
                                    //if there is an error then return it
                                    reject(new Error(err));
                                } else {
                                    //if a response is received
                                    resolve(true);
                                }
                            });

                        } else {
                           
                            //Try to save  the new record
                            Obj.save(function (err, result) {
                                if (err) {
                                    //if there is an error then return it
                                    reject(new Error(err));
                                } else {
                                    //if a response is received
                                    resolve(result);
                                }
                            });
                        }
                    });
                },
                err => {

                    //if there is an error then return it
                    reject(new Error(err));
                }
            );
        });
    },

    //This is the delete function
    delete: function (id, callback) {

    },
    //This is the find function
    find: function (id, callback) {

    }
};