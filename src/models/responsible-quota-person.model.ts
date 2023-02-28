"use strict";

import { resolveSoa } from "dns";
import { Model, UUIDV4 } from "sequelize";
import { ResponsibleQuotaPersonAttributes } from '../modules/responsible-quota-person/types/responsible-quota-person.model.types';

module.exports = (sequelize: any, DataTypes: any) => {
	class ResponsibleQuotaPersonModel extends Model<ResponsibleQuotaPersonAttributes> implements ResponsibleQuotaPersonAttributes {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		year!: number;
		name!: string;
		surname!: string;
		agency!: string;
		phone!: string;
		// quota!: string;
		//courseId! : string;
		static associate(models: any) {
			// define association here
			// User.hasMany(models.Article);
		}
	}
	ResponsibleQuotaPersonModel.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			year: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			name: {
				type: DataTypes.STRING(100),
				unique: true,
				allowNull: false,
			},
			surname: {
				type: DataTypes.STRING(100),
				unique: true,
				allowNull: false,
			},
			agency: {
				type: DataTypes.STRING(80),
				unique: true,
				allowNull: false,
			},
	
		

		},
		{
			sequelize,
			modelName: "ResponsibleQuotaPersonModel",
			tableName: "responsible_quota_person",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);
	return ResponsibleQuotaPersonModel;
};
