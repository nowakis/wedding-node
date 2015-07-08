var secrets = require('./secrets');
var mysql = require('mysql');

var pool = null;
module.exports = function () {
  if (!pool) {
    pool = mysql.createPool({
      host : '127.0.0.1',
      user : secrets.MYSQL_USER,
      password : secrets.MYSQL_PASSWORD,
      database : 'wedding',
      connectionLimit: 10
    });
  }

  return pool;
};
