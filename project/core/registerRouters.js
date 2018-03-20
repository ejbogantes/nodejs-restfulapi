//We're using strict mode for JavaScript
'use strict';

const config = require('../config/_config'),
    glob = require("glob");

/**
 * Function to register all the routers
 * @param {*} app 
 */
function register(app) {

    //the routers path
    let routersFolder = config.appRoot + '/api/routes/*.js';

    //Registers all the models of this connection
    glob(routersFolder, {}, function (er, files) {
        files.forEach(function (file) {
            let router = require(file);
            //All the routes
            app.use(router.path, router.router);
            console.log('Router Added required: ' + file);
        });
    })
}

module.exports.register = register;

