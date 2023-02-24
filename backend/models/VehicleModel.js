const Arkategoria = require('./Arkategoria');

module.exports = (sequelize, DataTypes) => {
    const Vehicle = sequelize.define("gepjarmuvek", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rendszam: {
            type: DataTypes.STRING
        }, 
        marka: {
            type: DataTypes.STRING
        },
        modell: {
            type: DataTypes.STRING
        },
        kilometerora_allas: {
            type: DataTypes.INTEGER
        },
        muszaki_ervenyesseg: {
            type: DataTypes.DATE
        },
        uzemanyag_kapacitas: {
            type: DataTypes.INTEGER
        },
        ferohely: {
            type: DataTypes.INTEGER
        },
        kedvezmeny: {
            type: DataTypes.INTEGER
        },
        egyedi_ar: {
            type: DataTypes.INTEGER
        },
        aka_gepjarmu_tipus: {
            type: DataTypes.STRING,
            references: {
                model: Arkategoria,
                key: 'gepjarmu_tipus'
            }
        },
        thly_id: {
            type: DataTypes.INTEGER
        },
        kep_url: {
            type: DataTypes.STRING
        }
    },{
        tableName: "gepjarmuvek",
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

    return Vehicle;
}