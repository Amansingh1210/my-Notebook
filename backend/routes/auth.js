const express = require('express');
const User = require('../modules/User');
const router = express.Router() ;
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

//  create the User using : POST "/api/auth/createuser" . No ligin requied
router.post('/createuser',[
    body('name','enter valid name').isLength({ min: 3}),
    body('email','enter valid email').isEmail(),
    body('password','password should contains min 4 characters').isLength({ min: 4}),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Check wheather the user is already exist with same email
try{
    let user =  await User.findOne({email : req.body.email}); 
    if(user){
        return res.status(400).json({ error: "Enter valid email" })
    }


    const salt = await bcrypt.genSaltSync(10);
    const securePass = await bcrypt.hashSync(req.body.password , salt)
    // Crrate a user
    user = await User.create({
        name : req.body.name ,
        email: req.body.email ,
        password: securePass ,
    });
    const data ={
        user:{
            id : user.id
        }
    }   
    const authToken = jwt.sign(data,'password');
    res.json({authToken});
    // .then(user => res.json(user)).
    // catch(error => res.json({
    //     error : `Enter valid name or email`,
    //     message : error.message 
    // }))
    // res.send({ errors: result.array() });
    // user.save();
    // res.send(req.body)
}
catch (error) {
        console.log(error.message);
        res.status(500).json("Server Not found")
    }
});


//  Authenticate a User using : POST "/api/auth/login" .  ligin requied
router.post('/login',[
    body('email', 'enter valid email').isEmail(),
    body('password', 'password is required').exists(),
], async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body;

    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({ error: "Enter valid email or password" })
        };
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({ error: "Enter valid email or password" })
        };
        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, 'password');
        res.json({ authToken });
    }
    catch (error){
        console.log(error.message);
        res.status(500).json("Server Not found")
    }
    
})

module.exports = router;