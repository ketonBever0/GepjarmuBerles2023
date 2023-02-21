
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("berlok", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nev: {
            type: DataTypes.STRING
        },
        adoszam: {
            type: DataTypes.STRING
        },
        iranyitoszam: {
            type: DataTypes.STRING
        },
        telepules_nev: {
            type: DataTypes.STRING
        },
        kozterulet_nev: {
            type: DataTypes.STRING
        },
        kozterulet_jelleg: {
            type: DataTypes.STRING
        },
        hazszam: {
            type: DataTypes.STRING
        },
        telefonszam: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }, 
        jelszo: {
            type: DataTypes.STRING
        },
        kedvezmeny: {
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: "berlok",
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
);
    return User;
}