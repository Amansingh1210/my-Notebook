const express = require('express');
const Note = require('../modules/Note');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');


// Route 1 :  Add a new Note using : POST "/api/note/addnote" .  login requied
router.post('/addnote',fetchuser , [
    body('title', 'enter some title for your note').isLength({ min: 1 }),
    body('description', 'enter valid description').isLength({ min: 5}),
], async (req, res)=>{
    try {
        const { title, description, tag } = await req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user : req.user.id 
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Server Not found");
    }
});


// Route 2 :  fetch all a notes of user using : GET "/api/note/fetchnote" .  login requied
 
router.get('/fetchallnotes', fetchuser, async (req, res)=>{
    try {
        const notes = await  Note.find({user: req.user.id});
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Server Not found");
    }
});

module.exports = router