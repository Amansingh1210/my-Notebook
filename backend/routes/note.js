const express = require('express');
const Note = require('../modules/Note');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');


// Route 1 :  Add a new Note using : POST "/api/notes/addnote" .  login requied
router.post('/addnote', fetchuser, [
    body('title', 'enter some title for your note').isLength({ min: 1 }),
    body('description', 'enter valid description').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = await req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Server Not found");
    }
});


// Route 2 :  fetch all a notes of user using : GET "/api/notes/fetchnote" .  login requied

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Server Not found");
    }
});

// Route 3 :  Update the existing note of  user using : PUT "/api/notes/updatenote" .  login requied

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const newnote = {};
        if (title) { newnote.title = title }
        if (description) { newnote.description = description }
        if (tag) { newnote.tag = tag }

        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true });
        res.json(note);
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Server Not found");
    }
})


// Route 4 :  Delete the note of  user using : PUT "/api/notes/updatenote" .  login requied

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id);
        res.json("Note Deleted");

    } catch (error) {
        console.log(error.message);
        res.status(500).json("Server Not found");
    }
})
module.exports = router