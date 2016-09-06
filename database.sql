CREATE DATABASE wedding;

CREATE TABLE guest (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(255), phone VARCHAR(15), confirmed BOOLEAN, confirmed_date TIMESTAMP DEFAULT NOW());

GRANT SELECT, INSERT, UPDATE ON wedding.* TO 'app'@'localhost';

use wedding;

CREATE TABLE message (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255),
  message VARCHAR(1024),
  submit_date TIMESTAMP DEFAULT NOW(),
  visible BOOLEAN
);

CREATE TABLE badword (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  badword VARCHAR(100) NOT NULL
);


CREATE TABLE guest(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255),
  phone varchar (16),
  confirmed varchar (16),
  confirmed_date TIMESTAMP DEFAULT NOW(),
  visible BOOLEAN
);
