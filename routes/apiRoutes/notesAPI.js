const router = require("express").Router();
const {addNote} = require('../../lib/notesHandling');
const {notes} = require('../../db/db.json');

router.post('/notes',(req,res) => {
    const newNote = addNote(req.body,notes);
    res.json(newNote);
});

router.get('/notes',(req,res)=>{
    res.json(notes);
});

module.exports = router;