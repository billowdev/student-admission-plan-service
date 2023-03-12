"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class AdmissionPlan extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id;
        quotaStatus;
        quotaSpecificSubject;
        quotaDetail;
        quotaQty;
        directStatus;
        directSpecificSubject;
        directDetail;
        directQty;
        cooperationStatus;
        cooperationSpecificSubject;
        cooperationDetail;
        cooperationQty;
        year;
        studyGroup;
        courseId;
        //courseId! : string;
        static associate(models) {
            // define association here
            AdmissionPlan.belongsTo(models.Course);
        }
    }
    AdmissionPlan.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        quotaStatus: {
            type: DataTypes.BOOLEAN,
            field: "quota_status",
            defaultValue: false
        },
        quotaSpecificSubject: {
            type: DataTypes.STRING(64),
            field: "quota_specific_subject",
            defaultValue: "",
            allowNull: false
        },
        quotaQty: {
            type: DataTypes.INTEGER,
            field: "quota_qty",
            defaultValue: 0,
        },
        quotaDetail: {
            type: DataTypes.STRING(255),
            field: "quota_detail",
            defaultValue: "",
            allowNull: false
        },
        directStatus: {
            type: DataTypes.BOOLEAN,
            field: "direct_status",
            defaultValue: false
        },
        directSpecificSubject: {
            type: DataTypes.STRING(64),
            field: "direct_specific_subject",
            allowNull: false,
            defaultValue: "",
        },
        directDetail: {
            type: DataTypes.STRING(255),
            field: "direct_detail",
            allowNull: false,
            defaultValue: "",
        },
        directQty: {
            type: DataTypes.INTEGER,
            field: "direct_qty",
            defaultValue: 0,
        },
        cooperationStatus: {
            type: DataTypes.BOOLEAN,
            field: "cooperation_status",
            defaultValue: false
        },
        cooperationSpecificSubject: {
            type: DataTypes.STRING(64),
            field: "cooperation_specific_subject",
            defaultValue: "",
            allowNull: true
        },
        cooperationDetail: {
            type: DataTypes.STRING(255),
            field: "cooperation_detail",
            defaultValue: "",
            allowNull: true
        },
        cooperationQty: {
            type: DataTypes.INTEGER,
            field: "cooperation_qty",
            defaultValue: 0,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        studyGroup: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        courseId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: 'course_id'
        }
    }, {
        sequelize,
        underscored: true,
        modelName: "AdmissionPlan",
        tableName: "admission_plans",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return AdmissionPlan;
};
