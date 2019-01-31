const pool = require("../db");

exports.index = (req, res, next) => {
  try {
      console.log(req.user);
      res.json([{
        message: req.user.name
      }]);
      
        
  } catch(err) {
    return next(err);
  }
    
}

module.exports = exports;