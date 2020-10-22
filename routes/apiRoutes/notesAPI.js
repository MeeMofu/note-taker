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
    if (req.query.action === 'remove') {
        const status = removeNote(req.params.id,notes);
        if (status === 'failed') res.sendStatus(404);
        else res.json(notes);
    }
    // If there's query action=remove, it will remove the note
    else {
        const result = getNote(req.params.id,notes);
        // If just the id, then it return note with the id
        if (result) res.json(result);
        else res.send(404);
    }
})

module.exports = router;