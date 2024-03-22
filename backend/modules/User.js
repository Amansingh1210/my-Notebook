const mongoose = require('mongoose');
const { Schema } = mongoose ;

const UserSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        unique : true
    },
    email:{
        type : String,
        required : true,
        unique : true 
    },
    timestamp:{
        type : Date,
        default : Date.now
    },
    password:{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('user',UserSchema)