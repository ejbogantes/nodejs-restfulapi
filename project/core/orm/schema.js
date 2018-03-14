//We're using strict mode for JavaScript
'use strict';

const Sequelize = require('sequelize');

module.exports = {
    string: {
        mongoose: String,
        sequelize: Sequelize.STRING
    }
};