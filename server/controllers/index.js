var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log("GET REQUEST TO /MESSAGES")
      db.queryDb('SELECT * FROM messages');
      //Grab the db connection object
      //Query db, via handler
    },

    post: function (req, res) {
      req.on('data', function(data) {
        console.log(data)
      })
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

