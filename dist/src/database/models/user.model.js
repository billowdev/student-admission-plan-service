"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user_types_1 = require("../../modules/user/types/user.types");
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id;
        email;
        username;
        password;
        name;
        surname;
        phone;
        role;
        faculty;
        static associate(models) {
            // define association here
            // User.hasMany(models.Article);
        }
    }
    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(64),
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(120),
            unique: true,
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
        phone: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        role: {
            type: DataTypes.ENUM(user_types_1.UserRole.ADMIN, user_types_1.UserRole.USER),
            allowNull: false,
            defaultValue: 'user',
        },
        faculty: {
            type: DataTypes.STRING(80),
            allowNull: true,
        },
    }, {
        sequelize,
        underscored: true,
        modelName: "User",
        tableName: "users",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return User;
};
