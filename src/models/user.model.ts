"use strict";

import { resolveSoa } from "dns";
import { Model, UUIDV4 } from "sequelize";
import { RoleEnum, UserAttributes } from "../user/types/user.model.types";

module.exports = (sequelize: any, DataTypes: any) => {
	class UserModel extends Model<UserAttributes> implements UserAttributes {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		email!: string;
		username!: string;
		password!: string;
		name!: string;
		surname!: string;
		phone!: string;
		role!: RoleEnum;
		faculty!: string;
		static associate(models: any) {
			// define association here
			// User.hasMany(models.Article);
		}
	}
	UserModel.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			username: {
				type: DataTypes.STRING(64),
				unique: true,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING(100),
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
				type: DataTypes.ENUM(RoleEnum.ADMIN, RoleEnum.USER),
				allowNull: false,
				defaultValue: 'user',
			},
			faculty: {
				type: DataTypes.STRING(80),
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: "UserModel",
			tableName: "users",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);
	return UserModel;
};
