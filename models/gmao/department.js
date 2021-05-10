var uuid = require('uuid').v4;

module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define("gmao_department", {
      department_id: {
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
      code: {
        type: Sequelize.STRING
      }
    });
  
    return Department;
};