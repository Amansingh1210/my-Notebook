const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    tag: {
        type: String,
        default: "general"
    },
})

module.exports = mongoose.model('notes', NotesSchema)