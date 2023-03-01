import db from "../../../database/models"
import { query } from 'express-validator';
import { ExtraAdminssionPlanQueryInterface } from "../types/extra-admission-plan.types";
import { isAllValuesUndefined } from "common/utils";
import sequelize, { Op } from "sequelize";
const ExtraAdmissionPlan = db.ExtraAdmissionPlan

export const getAllExtraAdmissionPlan = async (query: ExtraAdminssionPlanQueryInterface) => {
	try {
		if (isAllValuesUndefined(query)) {
			return await ExtraAdmissionPlan.findAll()
		}
		const response = await ExtraAdmissionPlan.findAll({
			where: {
				[Op.or]: [
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('qty')),
						'LIKE',
						`%${query.qty}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('year')),
						'LIKE',
						`%${query.year}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('courseId')),
						'LIKE',
						`%${query.courseId}%`
					),

					sequelize.literal(`LOWER(CONCAT_WS(' ', "qty", "year", "courseId")) LIKE '%${query.keyword}%'`)
				]
			}, raw: true
		})
		return response;

	} catch (error) {
		throw new Error()
	}
}

export default {
	getAllExtraAdmissionPlan
}