"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmissionPlan = exports.updateAdmissionPlan = exports.createAdmissionPlan = exports.getOneAdmissionPlan = exports.getAllAdmissionPlan = void 0;
const utils_1 = require("../../../common/utils");
const sequelize_1 = __importStar(require("sequelize"));
const models_1 = __importDefault(require("../../../database/models"));
const AdmissionPlan = models_1.default.AdmissionPlan;
// search option for a keyword that can be applied to all searchable fields.
const getAllAdmissionPlan = async (query) => {
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
        if (!(0, utils_1.isAllValuesUndefined)(query)) {
            whereClause = {
                [sequelize_1.Op.or]: searchableFields.map((field) => ({
                    [field]: {
                        [sequelize_1.Op.like]: `%${query[field]}%`,
                    },
                })),
            };
            if (query.keyword) {
                whereClause = {
                    ...whereClause,
                    [sequelize_1.Op.or]: [
                        ...searchableFields.map((field) => sequelize_1.default.where(sequelize_1.default.fn("LOWER", sequelize_1.default.col(field)), "LIKE", `%${query.keyword}%`)),
                    ],
                };
            }
        }
        const admissionPlans = await AdmissionPlan.findAll({
            where: whereClause,
            raw: true,
        });
        return admissionPlans;
    }
    catch (error) {
        throw new Error("Unable to fetch admission plans");
    }
};
exports.getAllAdmissionPlan = getAllAdmissionPlan;
const getOneAdmissionPlan = async (id) => {
    try {
        const response = await AdmissionPlan.findOne({
            where: { id }
        });
        return response;
    }
    catch (error) {
        console.error(`Error retrieving admission plan ${id}: `, error);
        throw new Error('Unable to retrieve admission plan');
    }
};
exports.getOneAdmissionPlan = getOneAdmissionPlan;
const createAdmissionPlan = async (dto) => {
    try {
        const createdAdmissionPlan = await AdmissionPlan.create(dto);
        return createdAdmissionPlan.toJSON();
    }
    catch (error) {
        console.error(`Error creating admission plan: ${error}`);
        throw new Error('Unable to create admission plan');
    }
};
exports.createAdmissionPlan = createAdmissionPlan;
const updateAdmissionPlan = async (id, admissionPlanDto) => {
    try {
        const [, [updatedAdmissionPlan]] = await AdmissionPlan.update({ ...admissionPlanDto }, {
            returning: true,
            where: { id },
        });
        return updatedAdmissionPlan;
    }
    catch (error) {
        console.error(`Error updating admission plan with id ${id}: `, error);
        return null;
    }
};
exports.updateAdmissionPlan = updateAdmissionPlan;
const deleteAdmissionPlan = async (id) => {
    try {
        const response = await AdmissionPlan.destroy({
            where: { id }
        });
        return response;
    }
    catch (error) {
        console.error(`Error deleting admission plan ${id}: `, error);
        throw new Error('Unable to delete admission plan');
    }
};
exports.deleteAdmissionPlan = deleteAdmissionPlan;
exports.default = {
    getAllAdmissionPlan: exports.getAllAdmissionPlan,
    getOneAdmissionPlan: exports.getOneAdmissionPlan,
    createAdmissionPlan: exports.createAdmissionPlan,
    updateAdmissionPlan: exports.updateAdmissionPlan,
    deleteAdmissionPlan: exports.deleteAdmissionPlan
};
