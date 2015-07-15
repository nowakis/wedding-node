var express = require('express');
var router = express.Router();
var callbacks = require('./rest-callback.js');
var messageModel = require('../models/message.js');

router.get('/', function(req, res, next) {
  messageModel.findAll(callbacks.get(res));
});

router.post('/', function(req, res, next) {
  console.log("Creating message: " + req.body);
  var message = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    submit_date: new Date(),
    visible: true
  }

  messageModel.save(message, callbacks.post(res));
});

module.exports = router;