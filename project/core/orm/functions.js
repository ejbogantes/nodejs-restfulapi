//We're using strict mode for JavaScript
'use strict';

//This class is required to generate the schemas
const schemas = require('../orm/schema');

module.exports = {

    //This function gets the database driver
    getDBDriver: function (database, callback) {

        try {

            //These are the available drivers
            var availableDrivers = {
                mongodb: 'mongoose',
                mysql: 'sequelize',
                postgresql: 'sequelize'
            };

            //Here we evaluate if the driver exists
            if (database in availableDrivers) {

                //Here we load the corresponding driver
                callback(require('../../core/orm/drivers/' + availableDrivers[database]));

            } else {

                //If there is no driver available
                throw ('There is no driver for ' + database + '. Please read the docs.');
            }

        } catch (ex) {

            //This is the way to handle exceptions
            callback(new Error(ex));
        }
    },

    //This function builds a Mongoose Schema
    buildSchema(schema, driver = 'mongoose') {

        let newSchema = {};

        for (const key of Object.keys(schema)) {
            newSchema[key] = schemas[schema[key]][driver];
        }

        return newSchema;
    }
};