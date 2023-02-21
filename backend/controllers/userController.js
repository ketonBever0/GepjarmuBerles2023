const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../models/sequelizeConfig");
const User = db.users;
const asyncHandler = require('express-async-handler')

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'});
}

const register = async(req, res) => {
    const email = "szegedisandor34@gmail.com";
    const user = await User.findAll({
        where: {
            email: email
        }
    });
    if(user) return res.json({message: "Az email-cím már foglalt!"});
    console.log("jeon")
}

module.exports = {
    register
}