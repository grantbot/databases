var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');
var utils = require('../utils.js');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log("GET REQUEST TO /MESSAGES")

      db.queryDb('SELECT * FROM messages', function(data) {
        utils.sendResponse(res, data, 200);
      });

    },

    post: function (req, res) {
      console.log("POST REQUEST TO /MESSAGES")

      console.log("DATA IS ", req.body);
      db.writeDb(req.body, function(data) {
        utils.sendResponse(res, data, 201);
      });

    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

