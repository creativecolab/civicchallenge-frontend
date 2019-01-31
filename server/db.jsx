const Pool = require('pg').Pool
const pool = new Pool({
  user: 'kashdog',
  host: 'localhost',
  database: 'api',
  password: 'bPCs40260$#',
  port: 5432,
})


module.exports = pool;