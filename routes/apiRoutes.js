var fs = require('fs')
var util = require('util')
var router = require('express').Router()


    router.get("/api/notes", function(req, res) {
        var noteContent = fs.readFileSync('/db/db.json', 'utf8')
  JSON.parse(noteContent);
  res.json(noteContent);
  
        });
    
var newNote = util.promisify(fs.readFile);

  router.post("/api/notes", function(req, res) {
        notesData.push(req.body);
      res.json(true);
    });

router.delete('/api/notes/:id', function(req, res) {

})
//   NEED A FUNCTION TO ASSIGN INCRIMENTING ID TO EACH NOTE 
module.exports = router
// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
