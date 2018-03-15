//We use strict from JS
'use strict';

//The required modules
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

//Date for the file log
const dateObj   = new Date();
const month     = dateObj.getUTCMonth() + 1; 
const day       = dateObj.getUTCDate();
const year      = dateObj.getUTCFullYear();
const date      = year + "-" + month + "-" + day;

//Here we create the logger
const logger = createLogger({
    format: combine(
        label({ label: 'right meow!' }),
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

    //This prints the error on console
    print: function (err, level = 'error', log = true) {

        logger.log({
            level: 'error',
            message: err.message
        });
    }
};