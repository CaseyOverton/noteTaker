var fs = require('fs')
var util = require('util')

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        var noteContent = newNote('./db/db.json','utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
            return data
          });
        res.json(noteContent);
      });
    
var newNote = util.promisify(fs.readFile);

  app.post("/api/notes", function(req, res) {
        notesData.push(req.body);
      res.json(true);
    });

app.delete('/api/notes/:id', function(req, res) {

})
//   NEED A FUNCTION TO ASSIGN INCRIMENTING ID TO EACH NOTE 

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
