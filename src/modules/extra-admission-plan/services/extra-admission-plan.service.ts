import db from "../../../database/models"
import { query } from 'express-validator';
import { ExtraAdmissionPlanQueryInterface } from "../types/extra-admission-plan.types";
import { isAllValuesUndefined } from "../../../common/utils";
import sequelize, { Op, where } from "sequelize";
import { ExtraAdmissionPlanAttributes } from './../types/extra-admission-plan.types';
import courseService from "../../course/services/course.service";

const ExtraAdmissionPlan = db.ExtraAdmissionPlan


export const getAllExtraAdmissionPlan = async (
	query: ExtraAdmissionPlanQueryInterface
): Promise<ExtraAdmissionPlanAttributes[]> => {
	try {
		if (isAllValuesUndefined(query)) {
			return await ExtraAdmissionPlan.findAll({
				attributes: {
					exclude: ['CourseId'],
				}
			});
		}
		const { qty, year, courseId, keyword } = query;
		const response = await ExtraAdmissionPlan.findAll({
			where: {
				[Op.or]: [
					sequelize.where(sequelize.fn("LOWER", sequelize.col("qty")), "LIKE", `%${qty}%`),
					sequelize.where(sequelize.fn("LOWER", sequelize.col("year")), "LIKE", `%${year}%`),
					sequelize.where(
						sequelize.fn("LOWER", sequelize.col("courseId")),
						"LIKE",
						`%${courseId}%`
					),
					sequelize.literal(`LOWER(CONCAT_WS(' ', "qty", "year", "courseId")) LIKE '%${keyword}%'`),
				],
				
			},
			attributes: {
				exclude: ['CourseId'],
			},
			raw: true,
		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const getOneExtraAdmissionPlan = async (id: string) => {
	try {
		const response = await ExtraAdmissionPlan.findOne({
			where: { id }
		})
		if (!response) return null
		return response
	} catch (error) {
		console.error(error);
		throw new Error("failed to get extra admission plan");
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
	deleteExtraAdmissionPlan
}