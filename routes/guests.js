var express = require('express');
var router = express.Router();
var db = require('../dbConnection.js');
var pool = db();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log("Creating guest: " + req.body);

  query = 'INSERT INTO guest SET ?'
  guest = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    confirmed: req.body.confirmed,
    confirmed_date: new Date()
  }

  pool.getConnection(function(err, connection) {
    connection.query(
      query,
      guest,
      postCallback(res, connection));
  });
});

postCallback = function defaultPostCallback(res, con) {
  return function (err, result) {
    con.release();
    if (err) {
      throw err;
    }
    res.json(result.insertId);
  }
}

module.exports = router;
