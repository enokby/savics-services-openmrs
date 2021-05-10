var uuid = require('uuid').v4;

module.exports = (sequelize, Sequelize) => {
    const Medecine = sequelize.define("pharmacy_medecine", {
      medecine_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      uuid: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: uuid()
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Medecine;
};