const dbConfig = require("../config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database.name, dbConfig.database.user, dbConfig.database.password, {
  host: dbConfig.database.host,
  port: dbConfig.database.port,
  dialect: dbConfig.database.dialect,
  operatorsAliases: '0',

  pool: {
    max: dbConfig.database.pool.max,
    min: dbConfig.database.pool.min,
    acquire: dbConfig.database.pool.acquire,
    idle: dbConfig.database.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.equipments = require("./gmao/equipment")(sequelize, Sequelize);
db.equipmentTypes = require("./gmao/equipment_type")(sequelize, Sequelize);
db.departments = require("./gmao/department")(sequelize, Sequelize);
db.providers = require("./gmao/provider")(sequelize, Sequelize);

module.exports = db;