var uuid = require('uuid').v4;

module.exports = (sequelize, Sequelize) => {
    const Equipment = sequelize.define("gmao_equipment", {
      equipment_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      uuid: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: uuid()
      },
      equipment_type_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'gmao_equipment_type',
            key: 'equipment_type_id'
        },
        allowNull: false
      },
      designation: {
        type: Sequelize.STRING
      },
      serial_number: {
        type: Sequelize.STRING
      },
      acquisition_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.INTEGER
      },
      localization: {
        type: Sequelize.STRING
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'gmao_department',
            key: 'department_id'
        },
        allowNull: true
      },
      last_modified_date: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      weight: {
        type: Sequelize.FLOAT
      },
      volume: {
        type: Sequelize.FLOAT
      },
      tracking: {
        type: Sequelize.INTEGER
      },
      in_service: {
        type: Sequelize.BOOLEAN
      },
      weight: {
        type: Sequelize.FLOAT
      },
      operating_state: {
        type: Sequelize.INTEGER
      },
      commissionning_year: {
        type: Sequelize.INTEGER
      },
      comments: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      provider_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'gmao_provider',
            key: 'provider_id'
        },
        allowNull: true
      },
    });
  
    return Equipment;
};