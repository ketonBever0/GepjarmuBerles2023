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

const filterByBrandVehicles = (req, res) => {
    conn.query(
            `
            SELECT * FROM gepjarmuvek
            WHERE marka = ?
        `,
        [req.params.keresettMarka],
        (err, rows) => {

            if(err) res.status(400).send(err);
            if(rows.length == 0) res.json({message: "Nincs ilyen adat!"});

            res.json(rows);
        }
    );
}

const filterByBrandType = (req, res) => {
    conn.query(
        `
        SELECT * FROM gepjarmuvek
        WHERE modell = ?
    `,
    [req.params.keresettModell],
    (err, rows) => {

        if(err) res.status(400).send(err);
        if(rows.length == 0) res.json({message: "Nincs ilyen adat!"});

        res.json(rows);
    }
);
}

module.exports = {
    getVehicles,
    getVehicleBrands,
    getVehicleBrandTypes,
    getVehiclePassengerSeatsCount,
    filterByBrandVehicles,
    filterByBrandType
}
