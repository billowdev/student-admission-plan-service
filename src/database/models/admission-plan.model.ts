"use strict";


import { AdmissionPlanAttributes } from "modules/admission-plan/types/admission-plan.type";
import { Model, UUIDV4 } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
	class AdmissionPlanModel extends Model<AdmissionPlanAttributes> implements AdmissionPlanAttributes {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		quotaStatus!: boolean;
		quotaSpecificSubject!: string;
		quotaDetail!: string | null;

		directStatus!: boolean;
		directSpecificSubject!: string;
		directDetail!: string;

		cooperationStatus!: boolean;
		cooperationSpecificSubject!: string;
		cooperationDetail!: string ;
		year!: number;
		courseId!: string;
		//courseId! : string;

		static associate(models: any) {
			// define association here
			AdmissionPlanModel.belongsTo(models.CourseModel, {
				foreignKey: {
					name: 'courseId',
					allowNull: false,
					field: 'course_id',
				}
			});

		}
	}
	AdmissionPlanModel.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
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
				allowNull: true
			},
			quotaDetail: {
				type: DataTypes.STRING(255),
				field: "quota_detail",
				allowNull: true
			},
			directStatus: {
				type: DataTypes.BOOLEAN,
				field: "direct_status",
				defaultValue: false
			},
			directSpecificSubject: {
				type: DataTypes.STRING(64),
				field: "direct_specific_subject",
				allowNull: true
			},
			directDetail: {
				type: DataTypes.STRING(255),
				field: "direct_detail",
				allowNull: true
			},
			cooperationStatus: {
				type: DataTypes.BOOLEAN,
				field: "cooperation_status",
				defaultValue: false
			},
			cooperationSpecificSubject: {
				type: DataTypes.STRING(64),
				field: "cooperation_specific_subject",
				allowNull: true
			},
			cooperationDetail: {
				type: DataTypes.STRING(255),
				field: "cooperation_detail",
				allowNull: true
			},
			year: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},

		},
		{
			sequelize,
			underscored: true,
			modelName: "AdmissionPlanModel",
			tableName: "admission_plans",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);
	return AdmissionPlanModel;
};
