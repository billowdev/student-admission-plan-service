
import { Op } from "sequelize";
import sequelize from "sequelize";
import db from "../../../database/models"
import isAllValuesUndefined from "../../../common/utils/is-all-undefined"
import { CourseAttributes, CourseQueryInterface } from "../types/course.type";
import { response } from "express";

const CourseModel = db.CourseModel


export const getAllCourse = async (query: CourseQueryInterface): Promise<CourseAttributes[]> => {
	try {
		if (isAllValuesUndefined(query)) {
			return await CourseModel.findAll()
		}
		const response = await CourseModel.findAll({
			where: {
				[Op.or]: [
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('major')),
						'LIKE',
						`%${query.major}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('degree')),
						'LIKE',
						`%${query.degree}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('faculty')),
						'LIKE',
						`%${query.faculty}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('qualification')),
						'LIKE',
						`%${query.qualification}%`
					),
					sequelize.literal(`LOWER(CONCAT_WS(' ', "major", "degree", "faculty", "qualification")) LIKE '%${query.keyword}%'`)
				]
			}, raw: true
		})
		return response;

	} catch (error) {
		throw new Error()
	}
}

export const getOneCourse = async (id: string): Promise<CourseAttributes | null> => {
	const response = await CourseModel.findByPk(id);
	return response;
};

export const createCourse = async (course: CourseAttributes): Promise<CourseAttributes> => {
	const response = await CourseModel.create(course);
	return response;
};

export const updateCourse = async (id: string, course: CourseAttributes): Promise<CourseAttributes> => {

	const response = await CourseModel.update(
		{ ...course },
		{
			returning: true,
			where: { id },

		}
	)
	return response
}

export const deleteCourse = async (id: string): Promise<CourseAttributes> => {

	const response = await CourseModel.destroy(
		{
			where: { id }
		}
	)
	return response
}


export default {
	getAllCourse,
	getOneCourse,
	createCourse,
	updateCourse,
	deleteCourse
}