'use strict';

const oauth2 = require('../oauth2')();

module.exports.register = function (app) {
    app.post('/oauth2/token', oauth2.token);
};
