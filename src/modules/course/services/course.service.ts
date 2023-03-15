
import sequelize, { Op } from "sequelize";
import db from "../../../database/models"
import isAllValuesUndefined from "../../../common/utils/is-all-undefined"
import { CourseAttributes, CourseQueryInterface } from "../types/course.type";

const Course = db.Course


/**
 * Get all courses based on the given query parameters
 * @param {CourseQueryInterface} query - Query parameters to filter courses
 * @returns {Promise<CourseAttributes[]>} - Promise that resolves to an array of CourseAttributes objects
 */
export const getAllCourse = async (query: any): Promise<CourseAttributes[]> => {
	try {
		let whereClause = {};
		const searchableFields = [
			"major",
			"degree",
			"faculty",
			"detail"
		];

		if (!isAllValuesUndefined(query)) {
			whereClause = {
				[Op.or]: searchableFields.map((field) => ({
					[field]: {
						[Op.like]: `%${query[field]}%`,
					},
				})),
			};
			if (query.keyword) {
				whereClause = {
					...whereClause,
					[Op.or]: [
						...searchableFields.map((field) => sequelize.where(sequelize.fn("LOWER", sequelize.col(field)), "LIKE", `%${query.keyword}%`)),
					],
				};
			}
		}

		const response = await Course.findAll({
			where: whereClause,
			raw: true
		});

		return response;
	} catch (error) {
		console.error(`Error retrieving all course `, error);
		throw new Error('Unable to retrieve all course');
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

export const getCourseByFaculty = async (faculty: string): Promise<CourseAttributes | null> => {
	try {
		if (faculty) {
			const response = await Course.findAll({
				where: {
					faculty: {
						[Op.like]: `%${faculty}%`,
					}
				}
			});
			if (!response) {
				throw new Error('Course not found');
			}
			return response;
		} else {
			const response = await Course.findAll();
			if (!response) {
				throw new Error('Course not found');
			}
			return response;
		}

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
		if (!response[1]) {
			throw new Error('Course not found');
		}
		return {
			id,
			...dto
		}
	} catch (error: unknown) {
		throw new Error('Unable to update course');
	}
};

export const deleteCourse = async (id: string): Promise<CourseAttributes> => {
	try {
		// delete extra admission plaln
		await db.ExtraAdmissionPlan.destroy({
			where: {
				courseId: id
			}
		});
		await db.AdmissionPlan.destroy({
			where: {
				courseId: id
			}
		});
	
		const response = await Course.destroy({
			where: { id },
		});
		return response
	} catch (error: unknown) {
		throw new Error('Unable to delete course');
	}
};





export default {
	getAllCourse,
	getOneCourse,
	createCourse,
	updateCourse,
	deleteCourse,
	getCourseByFaculty
}