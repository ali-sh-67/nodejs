const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('./../models/user');


async function isLoggined(req, res, next){
    let token = req.header("x-auth-token");
    if (!token) res.status(401).send('access denied');
    try {
        let decoded = jwt.verify(token, config.get("jwt_key"));
        let user = await User.findById(decoded._id);
        console.log(user);
        if(user) req.user = user;
        next();
    } catch(ex){
        return res.status(400).send('invalid token');
    }  
}

async function isAdmin(req,res,next){
    if(!req.user.isadmin) return res.status(401).send('access denied');
    next();
}




module.exports = {
    isLoggined, isAdmin
};