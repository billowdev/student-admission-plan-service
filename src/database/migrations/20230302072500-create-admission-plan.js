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
      quota_good_study_qty: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      quota_good_person_qty: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      quota_good_activity_im_qty: {
        type: DataTypes.INTEGER,
        field: "quota_good_activity_im_qty",
        defaultValue: 0,
      },
      quota_good_activity_li_qty: {
        type: DataTypes.INTEGER,
        field: "quota_good_activity_li_qty",
        defaultValue: 0,
      },
      quota_good_activity_sdd_qty: {
        type: DataTypes.INTEGER,
        field: "quota_good_activity_sdd_qty",
        defaultValue: 0,
      },
      quota_good_sport_qty: {
        type: DataTypes.INTEGER,
        field: "quota_good_sport_qty",
        defaultValue: 0,
      },
      direct_qty: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
      cooperation_qty: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
