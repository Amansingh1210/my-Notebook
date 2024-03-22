const express = require('express');
const User = require('../modules/User');
const router = express.Router() ;

router.post('/',(req , res)=>{
    console.log(req.body);
    const user = User(req.body)
    user.save();
    res.send("Hello aman")
})

module.exports = router;