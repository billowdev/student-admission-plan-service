
import { isAllValuesUndefined } from "../../../common/utils"
import sequelize, { Op } from "sequelize";
import db from "../../../database/models"
import { AdmissionPlanAttributes, AdmissionPlanInstance, AdmissionPlanQueryInterface } from 'modules/admission-plan/types/admission-plan.type';
import { query } from 'express-validator';


const AdmissionPlan = db.AdmissionPlan

// search option for a keyword that can be applied to all searchable fields.
export const getAllAdmissionPlan = async (query: AdmissionPlanQueryInterface): Promise<AdmissionPlanAttributes[]> => {
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
			include: [{
				model: db.Course,
				attributes: { exclude: ['id'] },
			}],
			raw: true,
		});

		return admissionPlans;
	} catch (error) {
		throw new Error("Unable to fetch admission plans");
	}
};


export const getAllAdmissionPlanGroupByFaculty = async (query: AdmissionPlanQueryInterface): Promise<any> => {
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
			include: [{
				model: db.Course,
				attributes: { exclude: ['id'] },
			}],
			// raw: true,
		});

		const groupedByFaculty: AdmissionPlanInstance = admissionPlans.reduce((result: any, item: any) => {
			const faculty = item['dataValues'].Course['dataValues'].faculty
			if (!result[faculty]) {
				result[faculty] = [];
			}
			result[faculty].push(item);
			return result;
		}, {});

		return groupedByFaculty;

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

export const getAllAdmissionPlanByCourseId = async (courseId: string): Promise<AdmissionPlanAttributes | null> => {
	try {
		const response = await AdmissionPlan.findAll({
			where: { courseId },
			include: [{
				model: db.Course,
				attributes: { exclude: ['id'] },
			}]
		});

		return response;
	} catch (error) {
		console.error(`Error retrieving admission plan by course id ${courseId}: `, error);
		throw new Error('Unable to retrieve admission plan');
	}
}

export const getAllAdmissionPlanByFaculty = async (faculty: string, query: any): Promise<AdmissionPlanAttributes | null> => {
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

		const response = await AdmissionPlan.findAll({
			where: whereClause,
			include: [{
				model: db.Course,
				where: {
					faculty: { [Op.like]: `%${faculty}%` },
				},
				attributes: { exclude: ['id'] },
				order: [['year', 'DESC']] // Add this line to sort by year in ascending order
			}],

		});

		return response;
	} catch (error) {
		console.error(`Error retrieving admission plan by faculty ${faculty}: `, error);
		throw new Error('Unable to retrieve admission plan');
	}
}

export const getYearlistAdmissionPlan = async (): Promise<any> => {
	try {
		const response = await AdmissionPlan.findAll({
			raw: true
		});
		const uniqueYears = Array.from(new Set(response.map((resp: any) => resp.year)));
		return uniqueYears;
	} catch (error) {
		throw new Error('Unable to retrieve year list of admission plan');
	}
}

export const getFacultylistAdmissionPlan = async (): Promise<any> => {
	try {

		const response = await AdmissionPlan.findAll({
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





export const createAdmissionPlan = async (dto: AdmissionPlanAttributes): Promise<AdmissionPlanAttributes> => {
	try {
		const createdAdmissionPlan = await AdmissionPlan.create(dto, { raw: true, returning: true });
		return createdAdmissionPlan.toJSON() as AdmissionPlanAttributes;
	} catch (error) {
		console.error(`Error creating admission plan: ${error}`);
		throw new Error('Unable to create admission plan');
	}
};


export const updateAdmissionPlan = async (id: string, admissionPlanDto: AdmissionPlanAttributes): Promise<AdmissionPlanAttributes | null> => {
	try {
		const testFind = await AdmissionPlan.findOne({
			where: { id },
			raw: true
		})
		const response = await AdmissionPlan.update(
			{ ...admissionPlanDto },
			{
				returning: true,
				where: { id },
			}
		);
		return response;
	} catch (error) {
		console.error(`Error updating admission plan with id ${id}: `, error);
		return null;
	}
}

export const checkIsYearExist = async (year: string, courseId: string): Promise<any> => {
	try {
		const exists = await AdmissionPlan.findOne({
			where: { year, courseId },
			raw: true
		})
		if (exists) return true;
	} catch (error) {
		return false
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

export default {
	getAllAdmissionPlan,
	getOneAdmissionPlan,
	createAdmissionPlan,
	updateAdmissionPlan,
	deleteAdmissionPlan,
	getAllAdmissionPlanByCourseId,
	getAllAdmissionPlanByFaculty,
	getYearlistAdmissionPlan,
	checkIsYearExist,
	getFacultylistAdmissionPlan,
	getAllAdmissionPlanGroupByFaculty
}