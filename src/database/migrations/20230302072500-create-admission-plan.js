'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('admission_plans', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      quota_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      quota_specific_subject: {
        type: Sequelize.STRING(64),
        allowNull: true
      },
      quota_detail: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      direct_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      direct_specific_subject: {
        type: Sequelize.STRING(64),
        allowNull: true
      },
      direct_detail: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      cooperation_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      cooperation_specific_subject: {
        type: Sequelize.STRING(64),
        allowNull: true
      },
      cooperation_detail: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      course_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'id'
        }
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
    await queryInterface.dropTable('admission_plans');
  }
};
