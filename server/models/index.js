//code for sequelize
var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.Messages.findAll()
        .complete(function(err, results){
          res.json(results);
        });
    },
    post: function (req, res) {
      db.Messages.create({
        username: req.body.username,
        message: req.body.message,
        roomname: req.body.roomname
      }).complete(function(err, results){
        res.send(201);
      });
    }
  }
};




// code for mysql below.
// var db = require('../db');
// var utils = require('../utils.js');


// module.exports = {
//   messages: {
//     get: function (req, res) {
//       db.queryDb('SELECT * FROM messages', function(data) {
//         utils.sendResponse(res, data, 200);
//       });
//     },
//     post: function (req, res) {
//       db.writeDb(req.body, function(data) {
//         utils.sendResponse(res, data, 201);
//       });
//     }
//   }
// };

