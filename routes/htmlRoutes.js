var router = require("express").Router()
var path = require("path") 

//home page
router.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
}) 

//notes 
router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
}) 

//export to server.js 
module.exports = router;