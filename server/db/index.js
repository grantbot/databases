var Sequelize = require("sequelize");
var orm = new Sequelize("chat", "root", "");

var Messages = orm.define('Messages', {
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

Messages.sync()
  .success(function() {
    console.log("MADE MESSAGES TABLE");
  });

exports.Messages = Messages;


// //Mysql stuff below. Sequelize stuff above.
// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".
// var dbConnection;

// exports.dbConnection = dbConnection = mysql.createConnection({
//       user: "root",
//       password: "",
//       database: "chat"
//     });

// dbConnection.connect();

// exports.queryDb = function(queryString, callback) {
//   dbConnection.query(queryString, function(err, rows) {
//     if (err) throw err;
//     callback(rows);
//   });
// };

// exports.writeDb = function(msgObj, callback) {
//   dbConnection.query('INSERT INTO messages SET ?', msgObj, function(err, result) {
//    if (err) throw err;
//    callback(result);
//   });
// };
