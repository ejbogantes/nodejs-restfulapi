//We're using strict mode for JavaScript
'use strict';

//We need to extend from this class
var Model = require('../../core/orm/model');

class User extends Model {

    /**
     * Class Contructor
     * @param {*} attributes 
     */
    constructor(attributes = {}) {
        super();
        this.attributes = attributes;
    }

    //This function is to define the schema
    schema() {
        return {
            _id: 'number',
            document: 'string',
            name: 'string',
            last_name: 'string',
            email: 'string',
            password: 'string'
        };
    }

    //This function is to define the required attributes
    required() {
        return [];
    }
}

//Here we export the model
module.exports = User;