"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ExtraAdmissionPlan extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id;
        qty;
        year;
        //courseId! : string;
        static associate(models) {
            // define association here
            ExtraAdmissionPlan.belongsTo(models.Course, {
                foreignKey: {
                    name: 'courseId',
                    allowNull: false,
                    field: 'course_id',
                }
            });
        }
    }
    ExtraAdmissionPlan.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        sequelize,
        underscored: true,
        modelName: "ExtraAdmissionPlan",
        tableName: "extra_admission_plans",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return ExtraAdmissionPlan;
};
