"use strict";


import { AdmissionPlanAttributes } from "modules/admission-plan/types/admission-plan.type";
import { Model, UUIDV4 } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {

	class AdmissionPlan extends Model<AdmissionPlanAttributes> implements AdmissionPlanAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		quotaStatus!: boolean;
		quotaSpecificSubject!: string;
		quotaDetail!: string | null;
		quotaQty!: number;

		directStatus!: boolean;
		directSpecificSubject!: string;
		directDetail!: string;
		directQty!: number;

		cooperationStatus!: boolean;
		cooperationSpecificSubject!: string;
		cooperationDetail!: string;
		cooperationQty!: number;
		year!: number;
		studyGroup!: number;
		courseId!: string;
		//courseId! : string;

		static associate(models: any) {
			// define association here

			AdmissionPlan.belongsTo(models.Course,
				// 	 {
				// 	foreignKey: {
				// 		name: 'courseId',
				// 		allowNull: false,
				// 		field: 'course_id',
				// 	}
				// }
			);

		}
	}
	AdmissionPlan.init(

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
			quotaQty: {
				type: DataTypes.INTEGER,
				field: "quota_qty",
				defaultValue: 0,
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
				allowNull: true
			},
			cooperationDetail: {
				type: DataTypes.STRING(255),
				field: "cooperation_detail",
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

		},
		{
			sequelize,
			underscored: true,
			modelName: "AdmissionPlan",
			tableName: "admission_plans",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	return AdmissionPlan;

};
