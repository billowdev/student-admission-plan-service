
import sequelize,{ Op } from "sequelize";
import db from "../../../database/models"
import isAllValuesUndefined from "../../../common/utils/is-all-undefined"
import { CourseAttributes, CourseQueryInterface } from "../types/course.type";

const Course = db.Course


/**
 * Get all courses based on the given query parameters
 * @param {CourseQueryInterface} query - Query parameters to filter courses
 * @returns {Promise<CourseAttributes[]>} - Promise that resolves to an array of CourseAttributes objects
 */
export const getAllCourse = async (query: CourseQueryInterface): Promise<CourseAttributes[]> => {
	try {
		if (isAllValuesUndefined(query)) {
			return await Course.findAll()
		}

		// Destructure the query object for readability
		const { major, degree, faculty, qualification, keyword } = query;

		// Add input validation to ensure the query object has all the required fields
		if (!major || !degree || !faculty || !qualification || !keyword) {
			throw new Error('Invalid query parameters');
		}

		// Use destructuring assignment to simplify the code
		const response = await Course.findAll({
			where: {
				[Op.or]: [
					sequelize.where(sequelize.fn('LOWER', sequelize.col('major')), 'LIKE', `%${major}%`),
					sequelize.where(sequelize.fn('LOWER', sequelize.col('degree')), 'LIKE', `%${degree}%`),
					sequelize.where(sequelize.fn('LOWER', sequelize.col('faculty')), 'LIKE', `%${faculty}%`),
					sequelize.where(sequelize.fn('LOWER', sequelize.col('qualification')), 'LIKE', `%${qualification}%`),
					sequelize.literal(`LOWER(CONCAT_WS(' ', "major", "degree", "faculty", "qualification")) LIKE '%${keyword}%'`)
				]
			},
			raw: true
		});

		return response;
	} catch (error) {
		throw new Error('Unable to get all courses');
	}
};


export const getOneCourse = async (id: string): Promise<CourseAttributes | null> => {
	try {
		const response = await Course.findByPk(id);
		if (!response) {
			throw new Error('Course not found');
		}
		return response;
	} catch (error: unknown) {
		throw new Error('Unable to retrieve course');
	}
};

export const createCourse = async (dto: CourseAttributes): Promise<CourseAttributes> => {
	try {
		const response = await Course.create(dto);
		return response;
	} catch (error: unknown) {
		throw new Error('Unable to create course');
	}
};

export const updateCourse = async (id: string, dto: CourseAttributes): Promise<CourseAttributes> => {
	try {
		const response = await Course.update(
			{ ...dto },
			{
				returning: true,
				where: { id },
			}
		);
		if (!response[0]) {
			throw new Error('Course not found');
		}
		return response[1][0];
	} catch (error: unknown) {
		throw new Error('Unable to update course');
	}
};

export const deleteCourse = async (id: string): Promise<void> => {
	try {
		const response = await Course.destroy({
			where: { id },
		});
		if (!response) {
			throw new Error('Course not found');
		}
	} catch (error: unknown) {
		throw new Error('Unable to delete course');
	}
};





export default {
	getAllCourse,
	getOneCourse,
	createCourse,
	updateCourse,
	deleteCourse
}