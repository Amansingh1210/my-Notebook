const express = require('express');
const User = require('../modules/User');
const router = express.Router() ;
const { body, validationResult } = require('express-validator');

router.post('/',[
    body('name','enter valid name').isLength({ min: 3}),
    body('email','enter valid email').isEmail(),
    body('password','password should contains min 4 characters').isLength({ min: 4}),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Crrate a user 
    let user =  await User.findOne({email : req.body.email}); 
    if(user){
        return res.status(400).json({ error: "Enter valid email" })
    }
    user = await User.create({
        name : req.body.name ,
        email: req.body.email ,
        password: req.body.password ,
    })
    
    // .then(user => res.json(user)).
    // catch(error => res.json({
    //     error : `Enter valid name or email`,
    //     message : error.message 
    // }))
    // res.send({ errors: result.array() });
    // user.save();
    // res.send(req.body)
    res.json(user)
})

module.exports = router;