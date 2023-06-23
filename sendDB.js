const mysql = require('mysql');
require('dotenv').config();
const pool = mysql.createPool({
  connectionLimit: 1,
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})


function sendTable() {
  return new Promise((resolve, reject) => {
    pool.query('select * from testtable', function(err, results) {
      if (err) throw reject({error: err});
      else {
        resolve(results)
      }
      
    })
  })
}

module.exports = sendTable;