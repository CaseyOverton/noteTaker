var fs = require('fs')
var util = require('util')

// require("../public/routes/db");
// var waitListData = require("../data/waitinglistData");

var path = require("path");


module.exports = function(app) {
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
// If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}