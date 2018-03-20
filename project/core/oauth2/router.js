'use strict';

const oauth2 = require('../oauth2');

module.exports.register = function (app) {
    app.get('/authorize', oauth2.authorization);
    app.post('/authorize/decision', oauth2.decision);
    app.post('/oauth/token', oauth2.token);
};
