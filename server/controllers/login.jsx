const pool = require("../db");
const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.index = async (req, res, next) => {
  try {
  
    
        
  } catch(err) {
    return next(err);
  }
    
}

function hashPassword(username, password) {
  var s = username + ':' + password;
  return crypto.createHash('sha256').update(s).digest('hex');
}



module.exports = exports;


