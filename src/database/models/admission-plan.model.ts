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
	
		quotaGoodStudyQty!: number
		quotaGoodPersonQty!: number
		// quota of good activity Music quantity
		// IM = international music
		quotaGoodActivityIMQty!: number
		// quota of good activity Language institute quantity
		// LI = Language institute
		quotaGoodActivityLIQty!: number
		// quota of good activity Student Development Division quantity
		// SDD = Student Development Division
		quotaGoodActivitySDDQty!: number
		quotaGoodSportQty!: number

		directStatus!: boolean;
		directSpecificSubject!: string;
		directDetail!: string;
		directQty!: number;

		cooperationStatus!: boolean;
		cooperationSpecificSubject!: string;
		cooperationDetail!: string;
		cooperationQty!: number;
		year!: string;
		studyGroup!: number;
		courseId!: string;
		//courseId! : string;

		static associate(models: any) {
			// define association here

			AdmissionPlan.belongsTo(models.Course,
				{
					foreignKey: {
						name: 'courseId',
						allowNull: false,
						field: 'course_id',
					}
				}
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
				defaultValue: "",
				allowNull: false
			},
	
			quotaGoodStudyQty: {
				type: DataTypes.INTEGER,
				field: "quota_good_study_qty",
				defaultValue: 0,
			},
			quotaGoodPersonQty: {
				type: DataTypes.INTEGER,
				field: "quota_good_person_qty",
				defaultValue: 0,
			},
			quotaGoodActivityIMQty: {
				type: DataTypes.INTEGER,
				field: "quota_good_activity_im_qty",
				defaultValue: 0,
			},
			quotaGoodActivityLIQty: {
				type: DataTypes.INTEGER,
				field: "quota_good_activity_li_qty",
				defaultValue: 0,
			},
			quotaGoodActivitySDDQty: {
				type: DataTypes.INTEGER,
				field: "quota_good_activity_sdd_qty",
				defaultValue: 0,
			},
			quotaGoodSportQty: {
				type: DataTypes.INTEGER,
				field: "quota_good_sport_qty",
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
				type: DataTypes.STRING(4),
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
