import db from "../../../database/models"
import { query } from 'express-validator';
import { ExtraAdmissionPlanGroupByType, ExtraAdmissionPlanQueryInterface, ExtraAdmissionPlanType } from "../types/extra-admission-plan.types";
import { isAllValuesUndefined } from "../../../common/utils";
import sequelize, { Op, where } from "sequelize";
import { ExtraAdmissionPlanAttributes, ExtraAdmissionPlanInstance } from './../types/extra-admission-plan.types';
import courseService from "../../course/services/course.service";

const ExtraAdmissionPlan = db.ExtraAdmissionPlan


export const getAllExtraAdmissionPlan = async (
	query: any
): Promise<ExtraAdmissionPlanAttributes[]> => {
	try {
		if (isAllValuesUndefined(query)) {
			return await ExtraAdmissionPlan.findAll({
				include: [{
					model: db.Course,
					attributes: { exclude: ['id'] },
					order: [['year', 'ASC']]
				}],
			});
		}
		const { qty, year, keyword } = query;
		const response = await ExtraAdmissionPlan.findAll({
			where: {
				[Op.or]: [
					sequelize.where(sequelize.fn("LOWER", sequelize.col("qty")), "LIKE", `%${qty}%`),
					sequelize.where(sequelize.fn("LOWER", sequelize.col("year")), "LIKE", `%${year}%`),
					// sequelize.where(
					// 	sequelize.fn("LOWER", sequelize.col("courseId")),
					// 	"LIKE",
					// 	`%${courseId}%`
					// ),
					sequelize.literal(`LOWER(CONCAT_WS(' ', "qty", "year", "courseId")) LIKE '%${keyword}%'`),
				],

			},
			include: [{
				model: db.Course,
				attributes: { exclude: ['id'] },
				order: [['year', 'ASC']] // Add this line to sort by year in ascending order
			}],

		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const getAllExtraAdmissionPlanGroupByFaculty = async (
	query: any
): Promise<{ [key: string]: ExtraAdmissionPlanAttributes[] }> => {
	try {
		if (isAllValuesUndefined(query)) {
			const response = await ExtraAdmissionPlan.findAll({
				include: [{
					model: db.Course,
					attributes: { exclude: ['id'] },
					order: [['year', 'ASC']]
				}],
			});
			const groupedByFaculty: ExtraAdmissionPlanGroupByType = response.reduce((result: ExtraAdmissionPlanGroupByType, item: ExtraAdmissionPlanInstance) => {
				const faculty = item.Course['dataValues'].faculty

				if (!result[faculty]) {
					result[faculty] = [];
				}
				result[faculty].push(item);
				return result;
			}, {});

			return groupedByFaculty;
		}

		const { qty, year, keyword } = query;
		const response = await ExtraAdmissionPlan.findAll({
			where: {
				[Op.or]: [
					sequelize.where(sequelize.fn("LOWER", sequelize.col("qty")), "LIKE", `%${qty}%`),
					sequelize.where(sequelize.fn("LOWER", sequelize.col("year")), "LIKE", `%${year}%`),
					sequelize.literal(`LOWER(CONCAT_WS(' ', "qty", "year", "courseId")) LIKE '%${keyword}%'`),
				],

			},
			include: [{
				model: db.Course,
				attributes: { exclude: ['id'] },
				order: [['year', 'ASC']]
			}],

		});

		const groupedByFaculty: ExtraAdmissionPlanGroupByType = response.reduce((result: ExtraAdmissionPlanGroupByType, item: ExtraAdmissionPlanInstance) => {
			const faculty = item.Course['dataValues'].faculty

			if (!result[faculty]) {
				result[faculty] = [];
			}
			result[faculty].push(item);
			return result;
		}, {});

		return groupedByFaculty;

	} catch (error) {
		throw new Error();
	}
};

export const getAllExtraAdmissionPlanByFaculty = async (
	faculty: String,
	query: any
): Promise<ExtraAdmissionPlanAttributes[]> => {
	try {
		if (isAllValuesUndefined(query)) {
			return await ExtraAdmissionPlan.findAll({
				atrributes: { exclude: ["CourseId"] },
				include: {
					model: db.Course,
					attributes: { exclude: ['id'] },
					where: {
						faculty: { [Op.like]: `%${faculty}%` },
					},
					order: [['year', 'ASC']]
				},
			});
		}
		const { qty, year, keyword } = query;
		const response = await ExtraAdmissionPlan.findAll({
			where: {
				[Op.or]: [
					sequelize.where(sequelize.fn("LOWER", sequelize.col("qty")), "LIKE", `%${qty}%`),
					sequelize.where(sequelize.fn("LOWER", sequelize.col("year")), "LIKE", `%${year}%`),
					sequelize.literal(`LOWER(CONCAT_WS(' ', "qty", "year", "courseId")) LIKE '%${keyword}%'`),
				],

			},
			include: {
				model: db.Course,
				attributes: { exclude: ['id'] },
				where: {
					faculty: { [Op.like]: `%${faculty}%` },
				},
				order: [['year', 'ASC']]
			},
			atrributes: { exclude: ["CourseId"] },
		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const getOneExtraAdmissionPlan = async (id: string) => {
	try {
		const response = await ExtraAdmissionPlan.findOne({
			where: { id },
			model: db.Course,
		})
		if (!response) return null
		return response
	} catch (error) {
		console.error(error);
		throw new Error("failed to get extra admission plan");
	}
}

export const getYearlistExtraAdmissionPlan = async (): Promise<any> => {
	try {

		const response = await ExtraAdmissionPlan.findAll({
			raw: true
		});
		const uniqueYears = Array.from(new Set(response.map((resp: any) => resp.year)));
		return uniqueYears;
	} catch (error) {
		console.error(`Error retrieving year list of extra admission plan: `, error);
		throw new Error('Unable to retrieve extra admission plan');
	}
}

export const getFacultylistExtraAdmissionPlan = async (): Promise<any> => {
	try {

		const response = await ExtraAdmissionPlan.findAll({
			include: {
				model: db.Course,
			},
			raw: true
		});
		const uniqueFaculty = Array.from(new Set(response.map((resp: any) => resp['Course.faculty'])));
		return uniqueFaculty;
	} catch (error) {
		console.error(`Error retrieving faculty list of extra admission plan: `, error);
		throw new Error('Unable to retrieve extra admission plan');
	}
}




export const createExtraAdmissionPlan = async (dto: ExtraAdmissionPlanAttributes) => {
	try {
		const courseExists = await courseService.getOneCourse(dto.courseId as string)
		if (courseExists) {
			return await ExtraAdmissionPlan.create(dto)
		} else {
			throw new Error('Course not found');
		}
	} catch (error) {
		console.error(`Error creating extra admission plan:`, error);
		throw new Error('Unable to create extra admission plan');
	}
};


export const updateExtraAdmissionPlan = async (id: string, { qty, year, courseId }: ExtraAdmissionPlanAttributes) => {
	try {
		const data = await ExtraAdmissionPlan.findOne({
			where: { id }
		})
		if (!data) {
			throw new Error('Extra admission plan not found')
		}
		const [rowsUpdated] = await ExtraAdmissionPlan.update(
			{ qty, year, courseId },
			{ where: { id } }
		)
		if (rowsUpdated === 0) {
			return null;
		}
		return await ExtraAdmissionPlan.findByPk(id);
	} catch (error) {
		console.error(`Error updating extra admission plan`, error);
		throw new Error('Failed to update extra admission plan');
	}
}




export const deleteExtraAdmissionPlan = async (id: string) => {
	try {
		const extraAdmissionPlan = await ExtraAdmissionPlan.findByPk(id);
		if (!extraAdmissionPlan) {
			throw new Error(`Extra admission plan with id ${id} not found`);
		}
		await extraAdmissionPlan.destroy();
		return true;
	} catch (error) {
		throw new Error(`Failed to delete extra admission plan: ${error}`);
	}
};



export default {
	getAllExtraAdmissionPlan,
	getOneExtraAdmissionPlan,
	createExtraAdmissionPlan,
	updateExtraAdmissionPlan,
	deleteExtraAdmissionPlan,
	getAllExtraAdmissionPlanByFaculty,
	getYearlistExtraAdmissionPlan,
	getAllExtraAdmissionPlanGroupByFaculty,
	getFacultylistExtraAdmissionPlan
}