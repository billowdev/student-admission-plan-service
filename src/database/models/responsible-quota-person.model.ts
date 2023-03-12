"use strict";


import { QuotaType, ResponsibleQuotaPersonAttributes } from "../../modules/responsible-quota-person/types/responsible-quota-person.types";
import { Model, UUIDV4 } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {

	class ResponsibleQuotaPerson extends Model<ResponsibleQuotaPersonAttributes> implements ResponsibleQuotaPersonAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		year!: string;
		name!: string;
		surname!: string;
		agency!: string;
		phone!: string;
		quota!: QuotaType;
		//courseId! : string;
		static associate(models: any) {
			// define association here
		}
	}
	ResponsibleQuotaPerson.init(

		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			year: {
				type: DataTypes.STRING(4),
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
				type: DataTypes.ENUM(
					QuotaType.GOOD_STUDY,
					QuotaType.GOOD_PERSON,
					QuotaType.GOOD_SPORT,
					QuotaType.GOOD_ACTIVITY
				),
				allowNull: false,
				defaultValue: QuotaType.GOOD_STUDY
			},
		},
		{
			sequelize,
			underscored: true,
			modelName: "ResponsibleQuotaPerson",
			tableName: "responsible_quota_persons",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	return ResponsibleQuotaPerson;

};
