//We use strict from JS
'use strict';

//The required modules
const config = require('../../config/_config');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

//Date for the file log
const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1;
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();
const date = year + "-" + month + "-" + day;

//Error Levels
const levels = {
    ERROR: 'error',
    WARN: 'warn',
    INFO: 'info',
    VERBOSE: 'verbose',
    DEBUG: 'debug',
    SILLY: 'silly'
};

//Here we create the logger
const logger = createLogger({
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/api_' + date + '.log' })
    ]
});

//Here we export the error helper functions
module.exports = {

    //levels
    levels: levels,

    /**
     * This prints the error on console
     */
    print: function (err, level = 'error', log = true) {

        logger.log({
            level: 'error',
            message: err.message
        });
    },

    /**
     * This returns a json error for the API
     */
    json: function (code, level = 'info', msg = null, lang = config.defaultLanguage) {

        //Get the global strings
        let strings = require('../../locale/' + lang);

        //The error
        let error = {
            level: level,
            message: strings.http_codes[code] || 'Unknown error',
            description: msg || 'No description'
        }

        //Logs the error on console and file
        logger.log(error);

        return error;
    },

    /**
     *  Returns the error messages
     */
    error: function (key, lang = config.defaultLanguage) {
        //Get the global strings
        let strings = require('../../locale/' + lang);
        //return the error
        return strings.error_messages[key] || 'No description';
    }
};