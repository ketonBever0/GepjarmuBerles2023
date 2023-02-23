const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const db = require('../models/sequelizeConfig');
const User = db.users;


const protect = (req,res,next) => {
    let token;
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        
        try {

            token = req.headers.authorization.split(' ')[1];
            const idFromtoken = jwt.verify(token, process.env.JWT_SECRET);
            req.user = User.findAll({
                where:{
                    id: idFromtoken.id
                }
            });
            next();
            
        } catch (error) {
            res.status(401);
            throw new Error("Be kell jelentkezni!");
        }

    }
    if(!token){
        res.status(401);
        throw new Error("Be kell jelentkezni!");
    }

};

module.exports={protect};
