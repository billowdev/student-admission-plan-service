
import { isAllValuesUndefined } from "../../../common/utils"
import sequelize, { Op } from "sequelize";
import db from "../../../database/models"
import { AdmissionPlanAttributes } from 'modules/admission-plan/types/admission-plan.type';

const AdmissionPlan = db.AdmissionPlan

export const getAllAdmissionPlan = async (query: any): Promise<AdmissionPlanAttributes> => {
	try {
		if (isAllValuesUndefined(query)) {
			return await AdmissionPlan.findAll()
		}
		const response = await AdmissionPlan.findAll({
			attributes: [
				{ exclude: ['CourseModelId'] }
			],
			where: {

				[Op.or]: [
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('quota_detail')),
						'LIKE',
						`%${query.quotaDetail}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('quota_specific_subject')),
						'LIKE',
						`%${query.quotaSpecificSubject}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('quota_status')),
						'LIKE',
						`%${query.quotaStatus}%`
					),
					//============================================
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('direct_detail')),
						'LIKE',
						`%${query.directDetail}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('direct_specific_subject')),
						'LIKE',
						`%${query.directSpecificSubject}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('direct_status')),
						'LIKE',
						`%${query.directStatus}%`
					),
					//============================================
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('cooperation_detail')),
						'LIKE',
						`%${query.cooperationDetail}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('cooperation_specific_subject')),
						'LIKE',
						`%${query.cooperationSpecificSubject}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('cooperation_status')),
						'LIKE',
						`%${query.cooperationStatus}%`
					),
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('year')),
						'LIKE',
						`%${query.year}%`
					),
					sequelize.literal(`LOWER(CONCAT_WS(
						' ',
						"quota_status",
						"quota_specific_subject",
						"quota_detail",
						"direct_detail", 
						"direct_specific_subject",
						"direct_status",
						"cooperation_detail", 
						"cooperation_specific_subject", 
						"cooperation_status",
						"year")) LIKE '%${query.keyword}%'`)
				]

			}, raw: true

		})
		return response;

	} catch (error) {
		throw new Error()
	}
}

export const getOneAdmissionPlan = async (id: string): Promise<AdmissionPlanAttributes> => {
	const response = await AdmissionPlan.findOne({
		attributes: [
			{ exclude: ['CourseModelId'] }
		],
		where: { id }
	})
	return response
}

export const createAdmissionPlan = async (dto: AdmissionPlanAttributes): Promise<AdmissionPlanAttributes> => {
	const response = await AdmissionPlan.create(dto);
	return response;
};

export const updateAdmissionPlan = async (id: string, admissionPlanDto: AdmissionPlanAttributes): Promise<AdmissionPlanAttributes> => {

	const response = await AdmissionPlan.update(
		{ ...admissionPlanDto },
		{
			returning: true,
			where: { id },

		}
	)
	return response
}

export const deleteAdmissionPlan = async (id: string): Promise<AdmissionPlanAttributes> => {

	const response = await AdmissionPlan.destroy(
		{
			where: { id }
		}
	)
	return response
}

export default {
	getAllAdmissionPlan,
	getOneAdmissionPlan,
	createAdmissionPlan,
	updateAdmissionPlan,
	deleteAdmissionPlan
}