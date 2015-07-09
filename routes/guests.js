var express = require('express');
var router = express.Router();
var db = require('../dbConnection.js');
var pool = db();

router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM guest';

  pool.getConnection(function conn(err, connection) {
    connection.query(
        query,
        [],
        getCallback(res, connection)
      );
  });
});

router.post('/', function(req, res, next) {
  console.log("Creating guest: " + req.body);

  var query = 'INSERT INTO guest SET ?';
  var guest = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    confirmed: req.body.confirmed,
    confirmed_date: new Date()
  }

  pool.getConnection(function conn(err, connection) {
    connection.query(
      query,
      guest,
      postCallback(res, connection));
  });
});

getCallback = function defaultGetCallback(res, con) {
  return function (err, result) {
    con.release();

    if (err) {
      throw err;
    }

    if (result.length > 0) {
      res.json(result);
    } else {
      res.statusCode = 404;
      res.send('Error 404: not found.');
    }
  }
}

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
