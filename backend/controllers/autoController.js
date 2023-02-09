const mysql = require('mysql');
const conn = mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "database":"gepjarmu"
});

const getVehicles = (req, res) => {
    conn.query(
        "SELECT * FROM gepjarmuvek",
    [],
    (err, rows) => {
        if(err) res.status(400).send(err);
        res.json(rows);
    });
}

const getVehicleBrands = (req, res) => {
    conn.query(
        "SELECT DISTINCT marka FROM gepjarmuvek",
        [],
        (err, rows) => {
            if(err) res.status(400).send(err);
            res.json(rows);
        }
    );
}

const getVehicleBrandTypes = (req, res) => {
    conn.query(
        "SELECT DISTINCT modell FROM gepjarmuvek",
        [],
        (err, rows) => {
            if(err) res.status(400).send(err);
            res.json(rows);
        }
    );
}

const getVehiclePassengerSeatsCount = (req, res) => {
    conn.query(
        "SELECT DISTINCT ferohely FROM gepjarmuvek",
        [],
        (err, rows) => {
            if(err) res.status(400).send(err);
            res.json(rows);
        }
    );
}



module.exports = {
    getVehicles,
    getVehicleBrands,
    getVehicleBrandTypes,
    getVehiclePassengerSeatsCount
}
