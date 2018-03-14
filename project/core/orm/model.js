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
     * @param {*} schema 
     * @param {*} database 
     */
    constructor(schema, database = config.defaultDBConn) {
        this.table = this.constructor.name;
        this.database = database;
        this.schema = schema;
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

                console.log(driver);

            } else {

                //Options for the Driver
                let options = {
                    table: thisObject.table,
                    schema: thisObject.schema,
                    attributes: {
                        name: 'Emilio'
                    }
                };

                //We try to save the record
                driver.save(options,
                    function (result) {
                        if (result instanceof Error) {
                            errorsHelper.print(result);
                            return false;
                        } else {
                            return result;
                        }
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
}

//Here we export the class
module.exports = Model;