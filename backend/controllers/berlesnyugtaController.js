const mysql = require('mysql');
const conn = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "gepjarmu"
});

const addBerlesNyugta = (req, res) => {
    const {berlesKezdete, berlesVege, idotartam, gepjarmu_allapot, uzemanyagszint, napiDij, kedvezmeny, bloId, gjuId} = req.body;
    conn.query(`INSERT INTO berlesnyugtak (
                    berles_kezdete,
                    berles_vege,
                    idotartam,
                    gepjarmu_allapot, 
                    uzemanyagszint, 
                    napi_dij, 
                    kedvezmeny,
                    blo_id, 
                    gju_id
    ) VALUES (?,?,?,?,?,?,?,?,?)`, [berlesKezdete, berlesVege, idotartam, gepjarmu_allapot, uzemanyagszint, napiDij, kedvezmeny, bloId, gjuId],
    (err, result) => {
        if(err){
            res.status(400).json(err);
        } else {
            res.json({message: "Sikeres rögzítés"});
        }
    });
}

module.exports = {
    addBerlesNyugta
}