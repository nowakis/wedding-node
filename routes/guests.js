var express = require('express');
var router = express.Router();
var callbacks = require('./rest-callback.js');
var guestModel = require('../models/guest.js');

router.get('/', function(req, res, next) {
  guestModel.findAll(callbacks.get(res));
});

router.post('/', function(req, res, next) {
  console.log("Creating guest: " + req.body);
  var guest = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    confirmed: req.body.confirmed,
    confirmed_date: new Date()
  }

  guestModel.save(guest, callbacks.post(res));
});

module.exports = router;
