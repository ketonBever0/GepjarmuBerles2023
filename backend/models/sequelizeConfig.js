const Sequelize = require('sequelize');
const sequelize = new Sequelize("gepjarmu", "root", "", {
        host: "localhost",
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./UserModel')(sequelize, Sequelize.DataTypes);
db.vehicles = require('./VehicleModel')(sequelize, Sequelize.DataTypes);
db.arkategoriak = require('./Arkategoria')(sequelize, Sequelize.DataTypes);

db.vehicles.hasOne(db.arkategoriak);
db.arkategoriak.belongsTo(db.vehicles);

module.exports = db;
