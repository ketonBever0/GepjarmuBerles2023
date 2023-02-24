module.exports = (sequelize, DataTypes) => {
    const Arkategoria = sequelize.define("arkategoriak", {
        gepjarmu_tipus: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        berleti_dij: {
            type: DataTypes.INTEGER
        }
    },{
        tableName: "arkategoriak",
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    
    return Arkategoria;
}