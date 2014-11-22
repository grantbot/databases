var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var dbConnection;

exports.dbConnection = dbConnection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
    });

dbConnection.connect();

exports.queryDb = function(queryString, callback) {
  dbConnection.query(queryString, function(err, rows) {
    if (err) throw err;
    callback(rows);
  });
};

exports.writeDb = function(msgObj, callback) {
  dbConnection.query('INSERT INTO messages SET ?', msgObj, function(err, result) {
   if (err) throw err;
   callback(result);
   console.log('RESULT IS   ' + result);
  });
};


//Write db helper functions
//Write(table)
//Read()
