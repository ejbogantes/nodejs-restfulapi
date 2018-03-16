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
        //public attributes
        this.table = this.constructor.name;
        this.database = database;
        //private attributes
        var _attributes = attributes;
        //private getters and setters
        this.setAttributes = function (value) {
            _attributes = value;
            fn.assignAttributes(_attributes, this);
        }
        this.getAttributes = function () {
            _attributes = fn.syncAttributes(_attributes, this);
            return _attributes;
        }
        //dynamically assign the attributes
        fn.assignAttributes(_attributes, this);
    }

    /**
     *  Saves or updates a record
     */
    save() {
        //we keep the reference
        let thisObject = this;

        return new Promise(function (resolve, reject) {

            //Here we try to get the driver
            fn.getDBDriver(thisObject.database, function (driver) {
                //If there is an error
                if (driver instanceof Error) {
                    errorsHelper.print(driver);
                } else {
                    //Options for the Driver
                    let options = {
                        table: thisObject.table,
                        schema: thisObject.schema(),
                        attributes: thisObject.getAttributes()
                    };
                    //We try to save the record
                    driver.save(options).then(function (result) {
                        resolve(result);
                    },
                        function (err) {
                            errorsHelper.print(err);
                            reject(err);
                        });
                }
            });
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


    //This function is to define the scheme
    schema() {
        return {};
    }

    //This function is to define the required attributes
    required() {
        return [];
    }

    //This function is to define the validation for each attribute
    validations() {
        return [];
    }

    //This function is to get an attribute
    getAttribute(attr) {
        return this[attr] || null;
    }

    //This function is to get an attribute
    setAttribute(attr, value) {
        if (attr in this) {
            this[attr] = value;
            return this[attr] === value;
        }
        return false;
    }
}

//Here we export the class
module.exports = Model;