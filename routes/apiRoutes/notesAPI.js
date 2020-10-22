const router = require("express").Router();
const {addNote,getNote,removeNote} = require('../../lib/notesHandling');
const {notes} = require('../../db/db.json');

router.post('/notes',(req,res) => {
    const newNote = addNote(req.body,notes);
    res.json(newNote);
});

router.get('/notes',(req,res)=>{
    res.json(notes);
});

router.get('/notes/:id',(req,res)=>{
    const result = getNote(req.params.id,notes);
    // If just the id, then it return note with the id
    if (result) res.json(result);
    else res.send(404);
})

router.delete('/notes/:id',(req,res)=>{
    const status = removeNote(req.params.id,notes);
    if (status === 'failed') res.sendStatus(404);
    else res.json(notes);
});

module.exports = router;