//We're using strict mode for JavaScript
'use strict';

/**
 * This file is for all the global configuration values
 */

//Environment variables
require('dotenv').config()

//Root paths
const appRoot         = require('app-root-path');
const appConfigPath   = appRoot + '/config/';

//Here are the configuration values
const Config = {

    //General Settings
    appRoot: appRoot + '',
    appPort: process.env.PORT || 8001,
    
    //Database Settings
    databaseConns: require(appConfigPath + '_database'),
    defaultDBConn:      'mongodb',
    defaultDBHost:      'localhost',
    defaultDBUser:      '',
    defaultDBPassword:  '',
    defaultDBPort:      27017,

    //Email Settings
    defaultEmailDriver: 'mailgun',
    emailDrivers: require(appConfigPath + '_email'),
};

//Here we export the configuration values
module.exports = Config;