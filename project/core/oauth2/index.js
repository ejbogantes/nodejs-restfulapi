'use strict';

//required files
const errorsHelper = require('../../core/helpers/error');
var config = require('../../config/_config'),
    passport = require('passport'),
    passportJWT = require("passport-jwt"),
    mongoose = require('mongoose'),
    jwtManager = require("jwt-simple"),
    ExtractJwt = passportJWT.ExtractJwt,
    Strategy = passportJWT.Strategy,
    JWT = config.auth.JWT;

//the params for passport
var params = {
    secretOrKey: JWT.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

/**
 * This function is to get a token
 */
module.exports = function () {


    var strategy = new Strategy(params, function (payload, done) {
        var userModel = mongoose.model('User');
        userModel.findOne({ _id: payload.id }, function (err, user) {
            if (user) {
                return done(null, {
                    id: user._id
                });
            } else {
                //the http code / message to return
                let errorCode = 401;
                let message = errorsHelper.error('unauthorized');
                //let's build the error block
                let error = errorsHelper.json(errorCode, errorsHelper.levels.WARN, message);
                //return the error
                res.status(errorCode).json(error);
            }
        });
    });
    passport.use(strategy);
    return {
        initialize: function () {
            return passport.initialize();
        },
        authenticate: function () {
            return passport.authenticate("jwt", { session: JWT.session });
        },
        token: function (req, res) {

            if (req.body.email && req.body.password) {

                var userModel = mongoose.model('User');
                var email = req.body.email;
                var password = req.body.password;

                userModel.findOne({ email: email, password: password },
                    function (err, user) {
                        if (user) {
                            var payload = {
                                id: user._id
                            };
                            var token = jwtManager.encode(payload, JWT.secret);
                            res.json({
                                token: token
                            });
                        } else {
                            //return the error
                            errorsHelper.response(res, 401, 'unauthorized');
                        }
                    });

            } else {
                //return the error
                errorsHelper.response(res, 401, 'unauthorized');
            }
        }
    };
};

