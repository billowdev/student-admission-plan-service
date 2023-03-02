import { ResponsibleQuotaPersonAttributes } from "../types/responsible-quota-person.types"
import { ResponsibleQuotaPersonQueryInterface } from './../types/responsible-quota-person.types';
import sequelize from 'sequelize';
import db from '../../../database/models';
import { isAllValuesUndefined } from './../../../common/utils/is-all-undefined';
const ResponsibleQuotaPerson = db.ResponsibleQuotaPerson
const { Op } = require('sequelize');


// RQP = ResponsibleQuotaPerson
export const createRQP = async (createDto: ResponsibleQuotaPersonAttributes) => {
	return
}

export const updateRQP = async (id: string, updateDto: ResponsibleQuotaPersonAttributes) => {
	return
}

export const deleteRQP = async (id: string) => {
	return
}

export const getOneRQP = async (id: string) => {
	return
}


export const getAllRQP = async (query: ResponsibleQuotaPersonQueryInterface): Promise<ResponsibleQuotaPersonAttributes[]> => {
	try {
		const { year, name, surname, agency, phone, quota, keyword } = query;
		const searchableFields = ['name', 'year', 'surname', 'agency', 'phone'];

		const whereClause: { [key: string]: any } = {};
	
		if (year) {
		  whereClause.year = year;
		}
		if (name) {
		  whereClause.name = {
			[Op.like]: `%${name}%`,
		  };
		}
		if (surname) {
		  whereClause.surname = {
			[Op.like]: `%${surname}%`,
		  };
		}
		if (agency) {
		  whereClause.agency = {
			[Op.like]: `%${agency}%`,
		  };
		}
		if (phone) {
		  whereClause.phone = {
			[Op.like]: `%${phone}%`,
		  };
		}
		if (quota) {
		  whereClause.quota = quota;
		}
	
		if (keyword) {
			whereClause[Op.or] = searchableFields.map((field) => ({
			  [field]: {
				[Op.like]: `%${keyword}%`,
			  },
			})) as { [key: string]: any };
		  }
	
		const responsibleQuotaPersons = await ResponsibleQuotaPerson.findAll({
		  where: whereClause,
		});
		return responsibleQuotaPersons
	} catch (error) {
		console.error(error);
		throw new Error('Unable to fetch responsible quota persons');
	}
};


export default {
	createRQP,
	updateRQP,
	deleteRQP,
	getOneRQP,
	getAllRQP
}


/**getAllResponsibleQuotaPerson   */
/** more flexibility in constructing the search query, as it allows for specifying different operators for different fields  */

// export const getAllResponsibleQuotaPerson = async (query: ResponsibleQuotaPersonQueryInterface): Promise<ResponsibleQuotaPersonAttributes[]> => {
// 	try {
// 	  const { year, name, surname, agency, phone, quota } = query;
// 	  const whereClause: any = {};
  
// 	  if (year) {
// 		whereClause.year = year;
// 	  }
// 	  if (name) {
// 		whereClause.name = {
// 		  [Op.iLike]: `%${name}%`,
// 		};
// 	  }
// 	  if (surname) {
// 		whereClause.surname = {
// 		  [Op.iLike]: `%${surname}%`,
// 		};
// 	  }
// 	  if (agency) {
// 		whereClause.agency = {
// 		  [Op.iLike]: `%${agency}%`,
// 		};
// 	  }
// 	  if (phone) {
// 		whereClause.phone = {
// 		  [Op.iLike]: `%${phone}%`,
// 		};
// 	  }
// 	  if (quota) {
// 		whereClause.quota = {
// 		  [Op.iLike]: `%${quota}%`,
// 		};
// 	  }
  
// 	  const responsibleQuotaPersons = await ResponsibleQuotaPerson.findAll({
// 		where: whereClause,
// 		raw: true,
// 	  });
  
// 	  return responsibleQuotaPersons;
// 	} catch (error) {
// 	  throw new Error('Unable to fetch responsible quota persons');
// 	}
//   };










// export const getAllRQP = async (query: ResponsibleQuotaPersonQueryInterface): Promise<ResponsibleQuotaPersonAttributes[]> => {
// 	try {
// 		let whereClause = {};
// 		const {keyword} = query
// 		const searchableFields = [
// 			'name',
// 			'year',
// 			'surname',
// 			'agency',
// 			'phone',
// 		];

// 		if (!isAllValuesUndefined(query)) {
// 			whereClause = {
// 				[Op.or]: searchableFields.map((field) => ({
// 					[field]: {
// 						[Op.like]: `%${query[field]}%`,
// 					},
// 				})),
// 			};

// 			if (keyword) {
// 				whereClause = {
// 					[Op.or]: [
// 						...searchableFields.map((field) =>
// 							sequelize.where(
// 								sequelize.fn('LOWER', sequelize.col(field)),
// 								'LIKE',
// 								`%${keyword}%`
// 							)
// 						),
// 					],
// 				};
// 			}

// 		}

// 		const responsibleQuotaPersons = await ResponsibleQuotaPerson.findAll({
// 			where: whereClause,
// 			raw: true,
// 		});

// 		return responsibleQuotaPersons;
// 	} catch (error) {
// 		console.error(error);
// 		throw new Error('Unable to fetch responsible quota persons');
// 	}
// };
