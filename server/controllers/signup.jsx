const pool = require("../db");
const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.index = async (req, res, next) => {
  try {
      console.log(req.body.email);
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      const token = hashPassword(name, email);
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'aneeshkashalikar@gmail.com',
          pass: 'feanarocurufinwe40260$#'
        }
      });
      var mailOptions = {
          from: 'aneeshkashalikar@gmail.com',
          to: email,
          subject: 'Activate your account on D4SD',
          html: `<p>Activate your D4SD account <a href="http://localhost:3000/activation/${token}"`  + '">here</a></p>'
      };
      transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
      });
      pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
          if (error) {
            throw error
          }
          if(results.rows.length > 0){
            res.status(201).send('Email already exists');
          }
          else{
            pool.query('INSERT INTO users (name, email, password, active, token ) VALUES ($1, $2, $3, false, $4)', [name, email, hashPassword(email, password), token], (error, results) => {
              if (error) {
                throw error
              }
              console.log(results);
              res.status(201).send(`User added with ID: ${results.insertId}`)
            })  
          }
      })
        
  } catch(err) {
    return next(err);
  }
    
}

function hashPassword(username, password) {
  var s = username + ':' + password;
  return crypto.createHash('sha256').update(s).digest('hex');
}

module.exports = exports;
