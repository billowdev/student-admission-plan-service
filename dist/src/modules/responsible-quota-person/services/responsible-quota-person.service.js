"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRQP = exports.getOneRQP = exports.deleteRQP = exports.updateRQP = exports.createRQP = void 0;
const models_1 = __importDefault(require("../../../database/models"));
const is_all_undefined_1 = require("./../../../common/utils/is-all-undefined");
const ResponsibleQuotaPerson = models_1.default.ResponsibleQuotaPerson;
const { Op } = require('sequelize');
// RQP = ResponsibleQuotaPerson
const createRQP = async (createDto) => {
    return;
};
exports.createRQP = createRQP;
const updateRQP = async (id, updateDto) => {
    return;
};
exports.updateRQP = updateRQP;
const deleteRQP = async (id) => {
    return;
};
exports.deleteRQP = deleteRQP;
const getOneRQP = async (id) => {
    return;
};
exports.getOneRQP = getOneRQP;
const getAllRQP = async (query) => {
    try {
        if ((0, is_all_undefined_1.isAllValuesUndefined)(query)) {
            return await ResponsibleQuotaPerson.findAll();
        }
        const { year, name, surname, agency, phone, quota, keyword } = query;
        const searchableFields = ['name', 'year', 'surname', 'agency', 'phone'];
        const whereClause = {};
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
            }));
        }
        const responsibleQuotaPersons = await ResponsibleQuotaPerson.findAll({
            where: whereClause,
        });
        return responsibleQuotaPersons;
    }
    catch (error) {
        console.error(error);
        throw new Error('Unable to fetch responsible quota persons');
    }
};
exports.getAllRQP = getAllRQP;
exports.default = {
    createRQP: exports.createRQP,
    updateRQP: exports.updateRQP,
    deleteRQP: exports.deleteRQP,
    getOneRQP: exports.getOneRQP,
    getAllRQP: exports.getAllRQP
};
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
