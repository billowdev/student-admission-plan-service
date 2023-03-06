'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('responsible_quota_persons', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      surname: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      agency: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      quota: {
        type: Sequelize.ENUM(
          'GOOD_STUDY',
          'GOOD_PERSON',
          'GOOD_SPORT',
          'GOOD_ACTIVITY'
        ),
        allowNull: false,
        defaultValue: 'GOOD_STUDY',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });

    await queryInterface.addIndex('responsible_quota_persons', ['quota']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('responsible_quota_persons');
  }
};
