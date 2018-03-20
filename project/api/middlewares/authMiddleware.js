//We're using strict mode for JavaScript
'use strict';

//required files
const errorsHelper = require('../helpers/error');
const passport     = require('passport');

//Authentication Middleware
var authMiddleware = {

    /**
     * Verify if the user is authorized or not
     */
    isAuthorized: function (req, res, next) {
        let isAuthorized = false;

        //do your thing

        if (!isAuthorized) {
            //the http code / message to return
            let errorCode = 401;
            let message   = errorsHelper.error('unauthorized');
            //let's build the error block
            let error = errorsHelper.json(errorCode, errorsHelper.levels.WARN, message);
            //return the error
            res.status(errorCode).json(error);
        } else {
            next();
        }
    }

};

module.exports = authMiddleware;