var express = require('express');
var fs = require('fs');
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;

 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(express.static(path.join(__dirname, 'public')))


   
   app.get("/notes", function(req, res) {
     res.sendFile(path.join(__dirname, "public/notes.html"));
   });
 // If no matching route is found default to home
   app.get("*", function(req, res) {
     res.sendFile(path.join(__dirname, "public/index.html"));
   });


   app.get("/api/notes", function(req, res) {
    var noteContent = fs.readFileSync('/db/db.json', 'utf8')
noteContent = JSON.parse(noteContent);
console.log(noteContent);
res.json(noteContent);

    });



app.listen(PORT, function() {
    console.log('server is listening on http://localhost:' + PORT)
})