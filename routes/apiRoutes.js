const fs = require("fs") 
const db = require("../db/db.json")
const router = require("express").Router()
var notes = [] 

//get notes 
router.get("/notes", function(req, res){
    res.json(db)
}); 

//post notes
router.post("/notes", function (req, res)  {  
    var newNote = req.body 
    var savedNote = JSON.parse(fs.readFileSync("../db/db.json", "utf-8")) 
notes.push(savedNote)  
notes.push(newNote) 
fs.writeFileSync("../db/db.json", JSON.stringify(notes)) 
if (err) throw err; 
res.send(data)
}); 

//delete note 
router.delete("/notes/:id", function (req, res){
   fs.readFile("../db/db.json", function (err, data){
       let newNotes = notes.filter(note => note.id != req.params.id) 
       fs.writeFile("../db/db.json", JSON.stringify(newNotes), function (err, data){
           if (err) throw err; 
           res.send(data);
       })
   })
   
}); 

module.exports = router