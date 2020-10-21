const fs = require('fs');
const path = require('path');
const short = require('short-uuid');

function addNote (newNote,notes){
    const date = new Date().toISOString().slice(0, 10);
    // Quick code to write the current date
    // Code found on https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript

    // If title is empty, have the current date
    if (!newNote.title) newNote.title = date;
    
    // If the text is empty, have a simple line
    if (!newNote.text) newNote.text = 'Written on '+date;

    // The api only handle which empty field, the webpage will handle the case when user doesn't have any input.
    // Save some error handling
    
    newNote.id = short.generate();   // Unquie short ID using npm package

    // push new note
    notes.push(newNote);

    fs.writeFileSync(path.join(__dirname,'../db/db.json'),JSON.stringify({notes : notes},null,2));
}

module.exports = {
    addNote,
}