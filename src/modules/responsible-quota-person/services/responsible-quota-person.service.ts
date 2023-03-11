import { ResponsibleQuotaPersonAttributes } from "../types/responsible-quota-person.types"
import { ResponsibleQuotaPersonQueryInterface } from './../types/responsible-quota-person.types';
import sequelize from 'sequelize';
import db from '../../../database/models';
import { isAllValuesUndefined } from './../../../common/utils/is-all-undefined';
const ResponsibleQuotaPerson = db.ResponsibleQuotaPerson
const { Op } = require('sequelize');


// RQP = ResponsibleQuotaPerson
export const createRQP = async (createDto: ResponsibleQuotaPersonAttributes) => {
	try {
		const response = await ResponsibleQuotaPerson.create(createDto);
		return response;
	} catch (error: unknown) {
		throw new Error('Unable to create rqp');
	}
}

export const updateRQP = async (id: string, updateDto: ResponsibleQuotaPersonAttributes) => {
	try {
		const data = await ResponsibleQuotaPerson.findOne({
			where: { id }
		})
		if (!data) {
			throw new Error('Extra admission plan not found')
		}
		const [rowsUpdated] = await ResponsibleQuotaPerson.update(
			{ ...updateDto},
			{ where: { id } }
		)
		if (rowsUpdated === 0) {
			return null;
		}
		return await ResponsibleQuotaPerson.findByPk(id);
	} catch (error) {
		console.error(`Error updating extra admission plan`, error);
		throw new Error('Failed to update extra admission plan');
	}
}

export const deleteRQP = async (id: string) => {
	try {
		const response = await ResponsibleQuotaPerson.destroy({where:{id}});
		return response;
	} catch (error: unknown) {
		throw new Error('Unable to delete responsible quota person');
	}
}

export const getOneRQP = async (id: string) => {
	try {
		const response = await ResponsibleQuotaPerson.findOne({
			where: { id },
		})
		return response
	} catch (error) {
		console.error(error);
		throw new Error("failed to get responsible quota person");
	}
}


export const getAllRQP = async (query: ResponsibleQuotaPersonQueryInterface): Promise<ResponsibleQuotaPersonAttributes[]> => {
	try {
		if (isAllValuesUndefined(query)) {
			return await ResponsibleQuotaPerson.findAll();
		  }
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
