const mysql = require('mysql');
const conn = mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "database":"gepjarmu"
});

const getVehicleTypes = (req, res) => {
    conn.query(
        `
            SELECT gepjarmu_tipus FROM arkategoriak
            ORDER BY arkategoria
        `,
        [],
        (err, rows) => {
            if(err) res.status(400).send(err);
            res.json(rows);
        }
    )
}

module.exports = {
    getVehicleTypes
}