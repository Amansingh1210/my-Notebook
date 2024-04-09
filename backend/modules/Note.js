const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
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