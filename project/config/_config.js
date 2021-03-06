//We're using strict mode for JavaScript
'use strict';

/**
 * This file is for all the global configuration values
 */

//Environment variables
require('dotenv').config()

//Root paths
const appRoot = require('app-root-path');
const appConfigPath = '../config/';

//Here are the configuration values
const Config = {

    //General Settings
    appRoot: appRoot + '',
    appPort: process.env.PORT || 8001,
    appUrl: process.env.APP_URL || 'http://localhost',

    //Authentication Settings
    auth: require(appConfigPath + '_auth'),

    //Database Settings
    database: require(appConfigPath + '_database'),

    //Email Settings
    defaultEmailDriver: 'mailgun',
    emailDrivers: require(appConfigPath + '_email'),

    //Localization Settings
    defaultLanguage: process.env.DEFAULT_LANG || 'en'
};

//Here we export the configuration values
module.exports = Config;