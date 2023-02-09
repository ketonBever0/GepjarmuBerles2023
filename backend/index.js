const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/gepjarmuberles/gepjarmuvek', require('./routes/autoRoutes'));

app.listen(8000, () => {
    console.log("Running");
});


