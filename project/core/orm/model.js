//We use strict from JS
'use strict';

/**
 * The required classes and modules
 */
const config = require('../../config/_config');
const fn = require('../../core/orm/functions');
const errorsHelper = require('../../api/helpers/error');

/**
 * This is a general class for Models 
 */
class Model {

    /**
     * Class Contructor
     * @param {*} database 
     */
    constructor(attributes, database = config.defaultDBConn) {
        this.table       = this.constructor.name;
        this.database    = database;
        this.schema      = this.schema();
        this.attributes  = attributes;
    }

    /**
     *  Saves or updates a record
     * @param {*} callback 
     */
    save(callback) {
        //we keep the reference
        let thisObject = this;

        //Here we try to get the driver
        fn.getDBDriver(this.database, function (driver) {

            //If there is an error
            if (driver instanceof Error) {

                errorsHelper.print(driver);

            } else {

                //Options for the Driver
                let options = {
                    table: thisObject.table,
                    schema: thisObject.schema,
                    attributes: thisObject.attributes
                };

                //We try to save the record
                driver.save(options).then(function (result) {
                    return result;
                },
                function (err) {
                        errorsHelper.print(err);
                        return false;
                });
                
            }
        });
    }

    /**
     *  Delete a record
     * @param {*} id 
     */
    delete(id, callback) {
        console.log(`This is the delete function`);
    }

    /**
     * Find a record
     * @param {*} id 
     */
    find(id, callback) {
        console.log(`This is the find function`);
    }   


    //schema function used for all models
    schema(){
        return {};
    } 
}

//Here we export the class
module.exports = Model;