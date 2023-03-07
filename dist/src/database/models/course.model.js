"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Course extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id;
        major;
        degree;
        detail;
        faculty;
        static associate(models) {
            // define association here
            Course.hasMany(models.AdmissionPlan);
            Course.hasMany(models.ExtraAdmissionPlan);
        }
    }
    Course.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        major: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
        degree: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        detail: {
            type: DataTypes.STRING(120),
            allowNull: true,
        },
        faculty: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
    }, {
        sequelize,
        underscored: true,
        modelName: "Course",
        tableName: "courses",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return Course;
};
