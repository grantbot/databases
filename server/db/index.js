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

exports.queryDb = function(queryString) {
  dbConnection.query(queryString, function(err, rows) {
    if (err) throw err;
    console.log(rows);
  });
};

exports.writeDb = function(msgObj) {
  dbConnection.query('INSERT INTO messages SET ?', msgObj, function(err, result) {
   if (err) throw err;
   console.log('RESULT IS   ' + result);
  });
};


//Write db helper functions
//Write(table)
//Read()
