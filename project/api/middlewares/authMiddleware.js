//We're using strict mode for JavaScript
'use strict';

var authMiddleware = {
    isAuthorized: function (req, res, next) {
        let isAuthorized = false;

    //here you have to implement logic

        if (!isAuthorized) {
            let error = {
                error: 'You are not authorized to see this content'
            };
            res.status(401).json(error);
        } else {
            next();
        }
    }
};

module.exports = authMiddleware;