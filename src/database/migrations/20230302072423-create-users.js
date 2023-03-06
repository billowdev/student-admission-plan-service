'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(64),
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING(120),
        unique: true
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      surname: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING(10)
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM('admin', 'user'),
        defaultValue: 'user'
      },
      faculty: {
        allowNull: true,
        type: Sequelize.STRING(80)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
