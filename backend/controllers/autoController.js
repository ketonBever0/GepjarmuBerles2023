const mysql = require('mysql');
const conn = mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "database":"gepjarmu"
});

const getVehicles = (req, res) => {
    conn.query(
        `
            SELECT g.rendszam, g.marka, g.modell, g.uzemanyag_kapacitas, g.ferohely, g.kedvezmeny, g.egyedi_ar, g.aka_gepjarmu_tipus, a.berleti_dij as "kategoria_ar"
            FROM gepjarmuvek g, arkategoriak a
            WHERE g.aka_gepjarmu_tipus = a.gepjarmu_tipus;
        `,
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

const filterByPassengerCount = (req, res) => {
    conn.query(
        `
            SELECT * FROM gepjarmuvek
            WHERE ferohely = ?
        `,
        [req.params.keresettFerohely],
        (err, rows) => {

            if(err) res.status(400).send(err);
            if(rows.length == 0) res.json({message: "Nincs ilyen adat!"});

            res.json(rows);
        }
    );
}

const filterByBrandAndVehicleType = (req, res) => {

}

module.exports = {
    getVehicles,
    getVehicleBrands,
    getVehicleBrandTypes,
    getVehiclePassengerSeatsCount,
    filterByBrandVehicles,
    filterByBrandType,
    filterByPassengerCount
}
