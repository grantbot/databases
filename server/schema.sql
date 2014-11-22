CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT(3) NOT NULL auto_increment,
  username VARCHAR(50) NOT NULL,
  message VARCHAR(150) NOT NULL,
  created TIMESTAMP(6) NOT NULL,
  room VARCHAR(20) NOT NULL,
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

