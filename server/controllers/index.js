var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log("GET REQUEST TO /MESSAGES")
      db.queryDb('SELECT * FROM messages');
      //res.end, send headers and 200 code
    },

    post: function (req, res) {
      console.log("POST REQUEST TO /MESSAGES")

      console.log("DATA IS ", req.body);
      db.writeDb(req.body);


    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

