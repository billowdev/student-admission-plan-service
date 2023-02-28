
import { Op } from "sequelize";
import sequelize from "sequelize";
import db from "../../../database/models"
import isAllValuesUndefined from "../../../common/utils/is-all-undefined"
import { CourseAttributes, CourseQueryInterface } from "../types/course.type";

const CourseModel = db.CourseModel




export const handleGetAllCourse = async (query: CourseQueryInterface) => {
	try {
		if (isAllValuesUndefined(query)) {
			return await CourseModel.findAll()
		}
		const courses = await CourseModel.findAll({
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
		return courses;

	} catch (error) {
		throw new Error()
	}
}


export default {
	handleGetAllCourse
}