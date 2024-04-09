const jwt = require('jsonwebtoken');
const JWT_SECRET = "password";

const fetchuser = (req, res, next)=>{
    const token = req.header("auth-token");
    if(!token){
        return res.status(401).json({ error: "Authenticate with valid token"});
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).json({ error: "Authenticate with valid token" });
    }
};

module.exports = fetchuser ; 