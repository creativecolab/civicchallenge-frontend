const express  = require("express"),
      router   = express.Router();

module.exports = function(app, passport) {
    router.route("/")
        .post(passport.authenticate('local-login', {
            successRedirect: '/',
            failureRedirect: '/login'
        }));
    return router;
};