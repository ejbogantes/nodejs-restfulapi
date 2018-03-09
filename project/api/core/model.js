'use strict';

/**
 * This is a general class for Models 
 */
class Model {

    /**
     * Class Contructor
     * @param {*} options 
     * @param {*} database 
     */
    constructor(options, database = options.database || 'mongodb') {
        this.database = database;
        this.options = options;
    }

    /**
     *  Create or update a record
     */
    save() {
        console.log(`This is the save function`);
    }

    /**
     *  Delete a record
     * @param {*} id 
     */
    delete(id) {
        console.log(`This is the delete function`);
    }

   /**
    * Find a record
    * @param {*} id 
    */
    find(id) {
        console.log(`This is the find function`);
    }
}

module.exports = Model;