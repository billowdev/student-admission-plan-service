
import sequelize,{ Op } from "sequelize";
import db from "../../../database/models"
import isAllValuesUndefined from "../../../common/utils/is-all-undefined"
import { CourseAttributes, CourseQueryInterface } from "../types/course.type";

const Course = db.Course


export const getAllCourse = async (query: CourseQueryInterface): Promise<CourseAttributes[]> => {
	try {
		if (isAllValuesUndefined(query)) {
			return await Course.findAll()
		}
		const response = await Course.findAll({
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
	const response = await Course.findByPk(id);
	return response;
};

export const createCourse = async (dto: CourseAttributes): Promise<CourseAttributes> => {
	const response = await Course.create(dto);
	return response;
};

export const updateCourse = async (id: string, dto: CourseAttributes): Promise<CourseAttributes> => {

	const response = await Course.update(
		{ ...dto },
		{
			returning: true,
			where: { id },

		}
	)
	return response
}

export const deleteCourse = async (id: string): Promise<CourseAttributes> => {

	const response = await Course.destroy(
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