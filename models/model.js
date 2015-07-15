var express = require('express');
var router = express.Router();
var db = require('../dbConnection.js');
var pool = db();

function model(table_name) {
  console.log('creating model for ' + table_name);
  return {
    findAll: findAll,
    save: save
  }

  function findAll(callback) {
    var query = 'SELECT * FROM ' + table_name + ';';
    executeQuery(query, [], callback);
  };

  function save(obj, callback) {
    var query = 'INSERT INTO ' + table_name + ' SET ?';
    executeQuery(query, obj, callback);
  }

  function executeQuery(query, args, callback) {
    console.log(query);
    pool.getConnection(function conn(err, connection) {
      connection.query(
          query,
          args,
          closeConnectionCallback(connection, callback)
        );
    });
  };

  function closeConnectionCallback(connection, callback) {
    return function(error, result) {
      connection.release();
      if (error) {
        console.log(error);
      }

      callback(error, result);
    }
  };

}

module.exports.model = model;