"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responsible_quota_person_types_1 = require("../../modules/responsible-quota-person/types/responsible-quota-person.types");
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ResponsibleQuotaPerson extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id;
        year;
        name;
        surname;
        agency;
        phone;
        quota;
        //courseId! : string;
        static associate(models) {
            // define association here
        }
    }
    ResponsibleQuotaPerson.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        surname: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        agency: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        quota: {
            type: DataTypes.ENUM(responsible_quota_person_types_1.QuotaType.GOOD_STUDY, responsible_quota_person_types_1.QuotaType.GOOD_PERSON, responsible_quota_person_types_1.QuotaType.GOOD_SPORT, responsible_quota_person_types_1.QuotaType.GOOD_ACTIVITY),
            allowNull: false,
            defaultValue: responsible_quota_person_types_1.QuotaType.GOOD_STUDY
        },
    }, {
        sequelize,
        underscored: true,
        modelName: "ResponsibleQuotaPerson",
        tableName: "responsible_quota_persons",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return ResponsibleQuotaPerson;
};
