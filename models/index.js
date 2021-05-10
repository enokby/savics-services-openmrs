const dbConfig = require("../config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database.name, dbConfig.database.user, dbConfig.database.password, {
  host: dbConfig.database.host,
  port: dbConfig.database.port,
  dialect: dbConfig.database.dialect,
  operatorsAliases: '0',
  //logging: false,
  define: {
    freezeTableName: true
  },
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

//the order of tables is very important for fks to be created
//gmao
db.equipmentTypes = require("./gmao/equipment_type")(sequelize, Sequelize);
db.departments = require("./gmao/department")(sequelize, Sequelize);
db.providers = require("./gmao/provider")(sequelize, Sequelize);
db.equipments = require("./gmao/equipment")(sequelize, Sequelize);

//pharmacy
db.medecines = require("./pharmacy/medecine")(sequelize, Sequelize);

module.exports = db;