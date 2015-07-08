var propertiesReader = require('properties-reader');
var properties = propertiesReader('/data/wedding/.myconf');

var dbUser = properties.get('db.wedding.user');
var dbPasswd = properties.get('db.wedding.passwd');

module.exports = {
  MYSQL_USER: dbUser,
  MYSQL_PASSWORD: dbPasswd,
};