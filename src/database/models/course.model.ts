"use strict";

import { resolveSoa } from "dns";
import { CourseAttributes } from "modules/course/types/course.type";
import { Model, UUIDV4 } from "sequelize";



module.exports = (sequelize: any, DataTypes: any) => {
	class CourseModel extends Model<CourseAttributes> implements CourseAttributes {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		major!: string;
		degree!: string;
		qualification!: string;
		faculty!: string;
		static associate(models: any) {
			// define association here
			CourseModel.hasMany(models.AdmissionPlanModel);
		}
	}
	CourseModel.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			major: {
				type: DataTypes.STRING(64),
				allowNull: false,
			},
			degree: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			qualification: {
				type: DataTypes.STRING(120),
				allowNull: true,
			},
			faculty: {
				type: DataTypes.STRING(100),
				allowNull: true,
			},
		},
		{
			sequelize,
			underscored: true,
			modelName: "CourseModel",
			tableName: "courses",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);
	return CourseModel;
};
