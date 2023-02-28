
import { isAllValuesUndefined } from "../../../common/utils"
import sequelize,{ Op } from "sequelize";
import db from "../../../database/models"

const AdmissionPlanModel = db.AdmissionPlanModel

export const getAll = async (query: any) => {
	try {
		if (isAllValuesUndefined(query)) {
			return await AdmissionPlanModel.findAll()
		}
		const response = await AdmissionPlanModel.findAll({
			where: {
				[Op.or]: [
					sequelize.where(
						sequelize.fn('LOWER', sequelize.col('id')),
						'LIKE',
						`%${query.id}%`
					),
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
					sequelize.literal(`LOWER(CONCAT_WS(' ', "id", 
					"quota_detail", "quota_specific_subject", "quota_status",
					"direct_detail", "direct_specific_subject", "direct_status",
					"cooperation_detail", "cooperation_specific_subject", "cooperation_status",
					)) LIKE '%${query.keyword}%'`)
				]
			}, raw: true
		})
		return response;

	} catch (error) {
		throw new Error()
	}
}

export default {
	getAll
}