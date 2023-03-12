"use strict";

import { resolveSoa } from "dns";


import { ExtraAdmissionPlanAttributes } from "../../modules/extra-admission-plan/types/extra-admission-plan.types";


import { Model, UUIDV4 } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {

	class ExtraAdmissionPlan extends Model<ExtraAdmissionPlanAttributes> implements ExtraAdmissionPlanAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		qty!: number;
		year!: string;
		courseId!: string;
		static associate(models: any) {
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
	ExtraAdmissionPlan.init(

		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			qty: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			year: {
				type: DataTypes.STRING(4),
				allowNull: true,
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
			modelName: "ExtraAdmissionPlan",
			tableName: "extra_admission_plans",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	return ExtraAdmissionPlan;

};
