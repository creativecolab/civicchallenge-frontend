const LocalStrategy = require('passport-local').Strategy;
const pool = require("./db");
const bcrypt = require('bcrypt');
const crypto = require('crypto');

module.exports = function(passport) {
    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
        function(req, email, password, done) {
            pool.query('SELECT * FROM users WHERE email = $1 AND active = true', [email], (err, results) => {
                if (err) { return done(err); }
                if(results.rows.length > 0) {
                    const first = results.rows[0]
                    console.log(first.password);
                    console.log(password);
                    if(hashPassword(email,password) == first.password){
                        return done(null, { email: first.email });
                    }
                    else {
                        return done(null, false);
                    }
                } 
                else {
                    return done(null, false);
                }  
            }); 
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.email)
    })

    passport.deserializeUser((email, done) => {
        pool.query('SELECT * FROM users WHERE email = $1', [email], (err, results) => {
            if(err) {
                return done(null, false, { message: 'Error when deserializing' });
            }

            return done(null, results.rows[0])
        })
    })
}

function hashPassword(username, password) {
    var s = username + ':' + password;
    return crypto.createHash('sha256').update(s).digest('hex');
  }