"use strict";

import { resolveSoa } from "dns";
import { CourseAttributes } from "modules/course/types/course.type";
import { Model, UUIDV4 } from "sequelize";



module.exports = (sequelize: any, DataTypes: any) => {

	class Course extends Model<CourseAttributes> implements CourseAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		major!: string;
		degree!: string;
		detail!: string;
		faculty!: string;
		static associate(models: any) {
			// define association here
			Course.hasMany(models.ExtraAdmissionPlan, {
				foreignKey: 'courseId',
				sourceKey: 'id',
			});
			Course.hasMany(models.AdmissionPlan, {
				foreignKey: 'courseId',
				sourceKey: 'id',
			});
			// Course.hasMany(models.AdmissionPlan);
			// Course.hasMany(models.ExtraAdmissionPlan);

		}
	}
	Course.init(

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
			detail: {
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

			modelName: "Course",
			tableName: "courses",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	return Course;

};
