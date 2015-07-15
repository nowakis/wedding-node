var express = require('express');
var router = express.Router();
var db = require('../dbConnection.js');
var callbacks = require('./rest-callback.js');
var pool = db();

