const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../models/sequelizeConfig");
const User = db.users;

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30s'});
}

const register = async(req, res) => {
    
    const { nev, adoszam, iranyitoszam, telepulesNev, kozteruletNev, kozteruletJelleg, hazszam, telefonszam, email, jelszo, kedvezmeny } = req.body;
    if(!email || !nev || !iranyitoszam || !telepulesNev || !kozteruletNev || !kozteruletJelleg || !hazszam || !telefonszam) return res.status(400).json({ message: "Hiányos adatok"});
    const users = await User.findAll({
        where: {
            email: email
        }
    });

    if (users[0]) return res.status(400).json({ message: "Az email cím már foglalt!"});
    
    const hashedPassword = await bcrypt.hash(jelszo, 10);

    const newUser = await User.create({
        nev: nev,
        adoszam: adoszam,
        iranyitoszam: iranyitoszam,
        telepules_nev: telepulesNev,
        kozterulet_nev: kozteruletNev,
        kozterulet_jelleg: kozteruletJelleg,
        hazszam: hazszam,
        telefonszam: telefonszam,
        email: email,
        jelszo: hashedPassword,
        kedvezmeny: kedvezmeny,
    });

    const token = generateToken(newUser.id);
    res.json({token: token});
}

const login = async(req, res) => {

    const {email, jelszo} = req.body;
    if(!email || !jelszo) return res.status(400).json({ message: "Hiányos adatok"});
    const users = await User.findAll({
        where: {
            email: email
        }
    });
    if (!users[0]) return res.status(400).json({ message: "Nem létező email cím!"});
    if (!await bcrypt.compare(jelszo, users[0].jelszo)) return res.status(400).json({ message: "Hibás jelszó!"});

    const token = generateToken(users[0].id);
    res.json({token: token});
}

module.exports = {
    register,
    login
}