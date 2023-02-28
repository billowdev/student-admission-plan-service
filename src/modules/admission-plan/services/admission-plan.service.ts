
import { isAllValuesUndefined } from "../../../common/utils"
import sequelize, { Op } from "sequelize";
import db from "../../../database/models"
import { AdmissionPlanAttributes } from 'modules/admission-plan/types/admission-plan.type';

const AdmissionPlan = db.AdmissionPlan

// Added return type to getAllAdmissionPlan() function to return an array of AdmissionPlanAttributes.
// Simplified where clause of the getAllAdmissionPlan() function to handle all searchable fields dynamically with the help of an array.
// Replaced multiple occurrences of sequelize.where with an array mapping to simplify code and make it easier to read.

export const getAllAdmissionPlan = async (query: any): Promise<AdmissionPlanAttributes[]> => {
	try {
		let whereClause = {};
		const searchableFields = [
			"quota_detail",
			"quota_specific_subject",
			"quota_status",
			"direct_detail",
			"direct_specific_subject",
			"direct_status",
			"cooperation_detail",
			"cooperation_specific_subject",
			"cooperation_status",
			"year",
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

		const admissionPlans = await AdmissionPlan.findAll({
			where: whereClause,
			raw: true,
		});

		return admissionPlans;
	} catch (error) {
		throw new Error("Unable to fetch admission plans");
	}
};


export const getOneAdmissionPlan = async (id: string): Promise<AdmissionPlanAttributes | null> => {
	try {
		const response = await AdmissionPlan.findOne({
			where: { id }
		})
		return response;
	} catch (error) {
		console.error(`Error retrieving admission plan ${id}: `, error);
		throw new Error('Unable to retrieve admission plan');
	}
}



export const createAdmissionPlan = async (dto: AdmissionPlanAttributes): Promise<AdmissionPlanAttributes> => {
	try {
	  const createdAdmissionPlan = await AdmissionPlan.create(dto);
	  return createdAdmissionPlan.toJSON() as AdmissionPlanAttributes;
	} catch (error) {
	  console.error(`Error creating admission plan: ${error}`);
	  throw new Error('Unable to create admission plan');
	}
  };
  

  export const updateAdmissionPlan = async (id: string, admissionPlanDto: AdmissionPlanAttributes): Promise<AdmissionPlanAttributes | null> => {
	try {
		const [, [updatedAdmissionPlan]] = await AdmissionPlan.update(
			{ ...admissionPlanDto },
			{
				returning: true,
				where: { id },
			}
		);
		return updatedAdmissionPlan;
	} catch (error) {
		console.error(`Error updating admission plan with id ${id}: `, error);
		return null;
	}
}


export const deleteAdmissionPlan = async (id: string): Promise<number> => {
	try {
		const response = await AdmissionPlan.destroy({
			where: { id }
		});
		return response;
	} catch (error) {
		console.error(`Error deleting admission plan ${id}: `, error);
		throw new Error('Unable to delete admission plan');
	}
}

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
	const response = await AdmissionPlanModel.findOne({
		attributes: [
			{ exclude: ['CourseModelId'] }
		],
		where: { id }
	})
	return response
}

export const createAdmissionPlan = async (dto: AdmissionPlanAttributes): Promise<AdmissionPlanAttributes> => {
	const response = await AdmissionPlanModel.create(dto);
	return response;
};

export const updateAdmissionPlan = async (id: string, admissionPlanDto: AdmissionPlanAttributes): Promise<AdmissionPlanAttributes> => {

	const response = await AdmissionPlanModel.update(
		{ ...admissionPlanDto },
		{
			returning: true,
			where: { id },

		}
	)
	return response
}

export const deleteAdmissionPlan = async (id: string): Promise<AdmissionPlanAttributes> => {

	const response = await AdmissionPlanModel.destroy(
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