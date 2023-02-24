const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/gepjarmuberles/gepjarmuvek', require('./routes/autoRoutes'));
app.use('/api/gepjarmuberles/gepjarmutipusok', require('./routes/arkategoriaRoutes'));
app.use('/api/gepjarmuberles/users', require('./routes/userRoutes'));
app.use('/api/gepjarmuberles/berlesnyugtak', require('./routes/berlesnyugtaRoutes'));

const db = require('./models/sequelizeConfig');
db.sequelize.sync();

app.listen(8000, () => {
    console.log("Running");
});

app.get('/', (req, res) => {
    res.send("Autók api");
});


