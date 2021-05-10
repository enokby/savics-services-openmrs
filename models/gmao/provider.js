var uuid = require('uuid').v4;

module.exports = (sequelize, Sequelize) => {
    const Provider = sequelize.define("gmao_provider", {
      provider_id: {
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
      },
      contact: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      }
    });
  
    return Provider;
};