const mysql = require('mysql');
const db = require('../models/sequelizeConfig');
const Vehicle = db.vehicles;
const Arkategoria = db.arkategoriak;
const fs = require('fs');
const { dirname } = require('path');
const appDir = dirname(require.main.filename);
const conn = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "gepjarmu"
});

//SELECT
const getVehicles = async (req, res) => {
    // const vehicles = await Vehicle.findAll({
    //     include: Arkategoria
    // });
    conn.query(
        `
            SELECT g.id, g.rendszam, g.marka, g.modell, g.uzemanyag_kapacitas, g.ferohely, g.kedvezmeny, g.egyedi_ar, g.aka_gepjarmu_tipus, g.kilometerora_allas, g.muszaki_ervenyesseg, a.berleti_dij AS "kategoria_ar", g.kep_url, g.thly_id,
            IF(
                g.id IN(
                SELECT in_g.id
                FROM gepjarmuvek in_g
                LEFT JOIN berlesnyugtak in_b ON (in_g.id = in_b.gju_id)
                LEFT JOIN szervizelesek in_sz ON (in_g.id = in_sz.gju_id)
                WHERE (in_b.berles_kezdete IS NOT NULL AND in_b.berles_vege IS NULL)
                    OR (in_sz.kezdo_datum IS NOT NULL AND in_sz.befejezo_datum IS NULL)
                    OR CURDATE() >= DATE_SUB(in_g.muszaki_ervenyesseg,INTERVAL 14 DAY)
                ), FALSE, TRUE
              ) AS "elerheto"
            FROM gepjarmuvek g JOIN arkategoriak a ON (g.aka_gepjarmu_tipus = a.gepjarmu_tipus)
            `,
        [],
        (err, rows) => {
            if (err) res.status(400).send(err);
            res.json(rows);
        });
}

/*
 
SELECT g.id, g.rendszam, g.marka, g.modell, g.uzemanyag_kapacitas, g.ferohely, g.kedvezmeny, g.egyedi_ar, g.aka_gepjarmu_tipus, g.kilometerora_allas, g.muszaki_ervenyesseg, a.berleti_dij as "kategoria_ar", g.kep_url, g.thly_id
FROM gepjarmuvek g, arkategoriak a
WHERE g.aka_gepjarmu_tipus = a.gepjarmu_tipus;
 
*/


const getVehicleBrands = (req, res) => {
    conn.query(
        `
            SELECT DISTINCT marka FROM gepjarmuvek
            ORDER BY marka;
        `,
        [],
        (err, rows) => {
            if (err) res.status(400).send(err);
            res.json(rows);
        }
    );
}

const getVehicleBrandTypes = (req, res) => {
    conn.query(
        `
            SELECT DISTINCT modell FROM gepjarmuvek
            WHERE marka = ?
            ORDER BY modell
        `,
        [req.params.marka],
        (err, rows) => {
            if (err) {
                res.status(400).send(err);
            } else {
                if (rows.length == 0) {
                    res.json({ message: "Nincs ilyen adat!" });
                } else {
                    res.json(rows);
                }
            }
        }
    );
}

const getVehiclePassengerSeatsCount = (req, res) => {
    conn.query(
        `
            SELECT DISTINCT ferohely FROM gepjarmuvek
            ORDER BY ferohely;
        `,
        [],
        (err, rows) => {
            if (err) res.status(400).send(err);
            res.json(rows);
        }
    );
}

const getVehicleEstates = (req, res) => {
    conn.query(
        `
            SELECT id, telepules_neve FROM telephelyek
            ORDER BY id
        `,
        [req.params.marka],
        (err, rows) => {
            if (err) {
                res.status(400).send(err);
            } else {
                if (rows.length == 0) {
                    res.json({ message: "Nincs ilyen adat!" });
                } else {
                    res.json(rows);
                }
            }
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

            if (err) {
                res.status(400).send(err);
            } else {
                if (rows.length == 0) {
                    res.json({ message: "Nincs ilyen adat!" });
                } else {
                    res.json(rows);
                }
            }
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

            if (err) {
                res.status(400).send(err);
            } else {
                if (rows.length == 0) {
                    res.json({ message: "Nincs ilyen adat!" });
                } else {
                    res.json(rows);
                }
            }
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

            if (err) {
                res.status(400).send(err);
            } else {
                if (rows.length == 0) {
                    res.json({ message: "Nincs ilyen adat!" });
                } else {
                    res.json(rows);
                }
            }
        }
    );
}

const filterByBrandAndVehicleType = (req, res) => {

    const marka = req.params.marka;
    const tipus = req.params.tipus;

    conn.query(
        `
            SELECT g.rendszam, g.marka, g.modell, g.uzemanyag_kapacitas, g.ferohely, g.kedvezmeny, g.egyedi_ar, g.aka_gepjarmu_tipus, a.berleti_dij as "kategoria_ar"
            FROM gepjarmuvek g, arkategoriak a
            WHERE g.aka_gepjarmu_tipus = a.gepjarmu_tipus AND g.marka = ? AND g.aka_gepjarmu_tipus = ?
        `,
        [marka, tipus],
        (err, rows) => {

            if (err) {
                res.status(400).send(err);
            } else {
                if (rows.length == 0) {
                    res.json({ message: "Nincs ilyen adat!" });
                } else {
                    res.json(rows);
                }
            }
        }
    );
}

const filterByPassengerCountAndVehicleType = (req, res) => {

    const ferohely = req.params.ferohely;
    const tipus = req.params.tipus;

    conn.query(
        `
            SELECT g.rendszam, g.marka, g.modell, g.uzemanyag_kapacitas, g.ferohely, g.kedvezmeny, g.egyedi_ar, g.aka_gepjarmu_tipus, a.berleti_dij as "kategoria_ar"
            FROM gepjarmuvek g, arkategoriak a
            WHERE g.aka_gepjarmu_tipus = a.gepjarmu_tipus AND g.ferohely = ? AND g.aka_gepjarmu_tipus = ?
        `,
        [ferohely, tipus],
        (err, rows) => {

            if (err) {
                res.status(400).send(err);
            } else {
                if (rows.length == 0) {
                    res.json({ message: "Nincs ilyen adat!" });
                } else {
                    res.json(rows);
                }
            }
        }
    );
}


//  Laci voltam szia

const isAvailable = (req, res) => {
    if (req.files) {
        const { id } = req.params;
        conn.query(
            `
            SELECT g.id, g.rendszam, g.marka, g.modell, g.kilometerora_allas, g.muszaki_ervenyesseg, g.uzemanyag_kapacitas, g.ferohely, g.kedvezmeny, g.egyedi_ar, g.thly_id, g.aka_gepjarmu_tipus, g.kep_url, b.berles_kezdete, b.idotartam, b.berles_vege, b.blo_id, sz.kezdo_datum, sz.befejezo_datum
            FROM gepjarmuvek g
            LEFT JOIN berlesnyugtak b ON (g.id=b.gju_id)
            LEFT JOIN szervizelesek sz ON (g.id=sz.gju_id)
            WHERE g.id=?
            AND (
                (b.berles_kezdete IS NOT NULL AND b.berles_vege IS NULL)
                OR (sz.kezdo_datum IS NOT NULL AND sz.befejezo_datum IS NULL)
                OR CURDATE() >= DATE_SUB(g.muszaki_ervenyesseg, INTERVAL 14 DAY)
            )
        `,
            [id],
            (err, rows) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    if (rows.length == 0) {
                        res.status(200).json({ isAvailable: true });
                        // res.status(200).json(rows);
                    } else {
                        res.status(200).json({ isAvailable: false });
                        // res.status(200).json(rows);
                    }
                }
            });
    }
}

// POST

const addNewVehicle = (req, res) => {
    const {
        rendszam,
        marka,
        modell,
        kmallas,
        muszakiErvenyesseg,
        uzemanyagkapacitas,
        ferohely,
        kedvezmeny,
        egyediAr,
        thely,
        gepjarmuTipus
    } = JSON.parse(req.body.form);


    if (!req.files) res.json({ message: "Nincs fájl!" });

    // console.log(req.body.form);
    // console.log(req.files.file);
    // console.log(rendszam);

    var path = appDir + "/images/";

    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }

    const imgFile = req.files.file;
    const filename = `${Date.now()}_${req.body.filename}`;

    try {
        console.log(`${path}${filename}`);

        fs.writeFile(`${path}${filename}`, imgFile.data, err => err && console.log(err));

        conn.query(
            `INSERT INTO gepjarmuvek 
        (   
            rendszam,
            marka,
            modell,
            kilometerora_allas,
            muszaki_ervenyesseg,
            uzemanyag_kapacitas,
            ferohely,
            kedvezmeny,
            egyedi_ar,
            aka_gepjarmu_tipus,
            thly_id,
            kep_url
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                rendszam,
                marka,
                modell,
                kmallas,
                muszakiErvenyesseg,
                uzemanyagkapacitas,
                ferohely,
                kedvezmeny,
                egyediAr,
                gepjarmuTipus,
                thely,
                filename
            ],
            (err) => {
                if (err) {
                    res.status(400).json({ message: "Sikertelen adatfelvitel!", error: err });
                } else {
                    res.json({ message: "Sikeres adatfelvitel!" });
                }
            });
    } catch {
        res.status(400).json({ message: "Fájlfeltöltés elhasalt!" });
    }
}

// PATCH
const modifyVehicle = (req, res) => {
    const {
        id,
        rendszam,
        marka,
        modell,
        kmallas,
        muszakiErvenyesseg,
        uzemanyagkapacitas,
        ferohely,
        kedvezmeny,
        egyediAr,
        thely,
        gepjarmuTipus,
        kepUrl
    } = req.body;

    conn.query(
        `
            UPDATE gepjarmuvek 
            SET rendszam = ?, 
                marka = ?,
                modell = ?,
                kilometerora_allas = ?,
                muszaki_ervenyesseg = ?,
                uzemanyag_kapacitas = ?,
                ferohely = ?,
                kedvezmeny = ?,
                egyedi_ar = ?,
                aka_gepjarmu_tipus = ?,
                thly_id = ?,
                kep_url = ?
            WHERE id = ?
        `,
        [
            rendszam,
            marka,
            modell,
            kmallas,
            muszakiErvenyesseg,
            uzemanyagkapacitas,
            ferohely,
            kedvezmeny,
            egyediAr,
            gepjarmuTipus,
            thely,
            kepUrl,
            id
        ],
        (err) => {
            if (err) {
                res.status(400).json({ message: "Sikertelen módosítási próbálkozás!" });
            } else {
                res.json({ message: "Sikeres módosítás!" });
            }
        });
}

const deleteVehicle = (req, res) => {
    const { id } = req.body;
    conn.query(
        `
            DELETE FROM gepjarmuvek
            WHERE id = ?;
        `,
        [id],
        (err) => {
            if (err) {
                res.status(400).json({ message: "Sikertelen törlési kísérlet!" });
            } else {
                res.json({ message: "Sikeres törlés!" });
            }
        });
}



module.exports = {
    getVehicles,
    getVehicleBrands,
    getVehicleBrandTypes,
    getVehiclePassengerSeatsCount,
    getVehicleEstates,
    filterByBrandVehicles,
    filterByBrandType,
    filterByPassengerCount,
    filterByBrandAndVehicleType,
    filterByPassengerCountAndVehicleType,
    addNewVehicle,
    modifyVehicle,
    deleteVehicle,
    isAvailable
}
