const pool = require("../db");

exports.index = (req, res, next) => {
  try {
      console.log(req.params.token);
      pool.query('SELECT * FROM users WHERE token = $1 AND active = false;', [req.params.token], (error, results) => {
          if (error) {
            throw error
          }
          if(results.rows.length > 0){
            pool.query('UPDATE users SET active = true WHERE token = $1;', [results.rows[0].token], (error, results) => {
              if (error) {
                throw error
              }
              console.log("User Account activated");
            });
            res.json([{
              message: "Your account has been activated."
            }]);
          }
          else {
            console.log("Activation Link is invalid");
            res.json([{
              message: "This activation link is inactive"
            }]);
          }
      }) 
      
        
  } catch(err) {
    return next(err);
  }
    
}

module.exports = exports;