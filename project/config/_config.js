/**
 * This file is for all the global configuration values
 */

//Environment variables
require('dotenv').config()

//Root paths
var appRoot         = require('app-root-path');
var appConfigPath   = appRoot + '/config/';

//Here are the configuration values
var config = {
    //General Settings
    appRoot: appRoot + '',
    appPort: process.env.PORT || 8001,
    
    //Database Settings
    defaultDatabaseConn: 'mongodb',
    databaseConns: require(appConfigPath + '_database'),

    //Email Settings
    defaultEmailDriver: 'mailgun',
    emailDrivers: require(appConfigPath + '_email'),
};

//Here we export the configuration values
module.exports = config;