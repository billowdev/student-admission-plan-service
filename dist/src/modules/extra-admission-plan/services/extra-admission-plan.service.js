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
exports.deleteExtraAdmissionPlan = exports.updateExtraAdmissionPlan = exports.createExtraAdmissionPlan = exports.getOneExtraAdmissionPlan = exports.getAllExtraAdmissionPlan = void 0;
const models_1 = __importDefault(require("../../../database/models"));
const utils_1 = require("../../../common/utils");
const sequelize_1 = __importStar(require("sequelize"));
const course_service_1 = __importDefault(require("../../course/services/course.service"));
const ExtraAdmissionPlan = models_1.default.ExtraAdmissionPlan;
const getAllExtraAdmissionPlan = async (query) => {
    try {
        if ((0, utils_1.isAllValuesUndefined)(query)) {
            return await ExtraAdmissionPlan.findAll();
        }
        const { qty, year, courseId, keyword } = query;
        const response = await ExtraAdmissionPlan.findAll({
            where: {
                [sequelize_1.Op.or]: [
                    sequelize_1.default.where(sequelize_1.default.fn("LOWER", sequelize_1.default.col("qty")), "LIKE", `%${qty}%`),
                    sequelize_1.default.where(sequelize_1.default.fn("LOWER", sequelize_1.default.col("year")), "LIKE", `%${year}%`),
                    sequelize_1.default.where(sequelize_1.default.fn("LOWER", sequelize_1.default.col("courseId")), "LIKE", `%${courseId}%`),
                    sequelize_1.default.literal(`LOWER(CONCAT_WS(' ', "qty", "year", "courseId")) LIKE '%${keyword}%'`),
                ],
            },
            raw: true,
        });
        return response;
    }
    catch (error) {
        throw error;
    }
};
exports.getAllExtraAdmissionPlan = getAllExtraAdmissionPlan;
const getOneExtraAdmissionPlan = async (id) => {
    try {
        const response = await ExtraAdmissionPlan.findOne({
            where: { id }
        });
        if (!response)
            return null;
        return response;
    }
    catch (error) {
        console.error(error);
        throw new Error("failed to get extra admission plan");
    }
};
exports.getOneExtraAdmissionPlan = getOneExtraAdmissionPlan;
const createExtraAdmissionPlan = async (dto) => {
    try {
        const courseExists = await course_service_1.default.getOneCourse(dto.courseId);
        if (courseExists) {
            return await ExtraAdmissionPlan.create(dto);
        }
        else {
            throw new Error('Course not found');
        }
    }
    catch (error) {
        console.error(`Error creating extra admission plan:`, error);
        throw new Error('Unable to create extra admission plan');
    }
};
exports.createExtraAdmissionPlan = createExtraAdmissionPlan;
const updateExtraAdmissionPlan = async (id, { qty, year, courseId }) => {
    try {
        const data = await ExtraAdmissionPlan.findOne({
            where: { id }
        });
        if (!data) {
            throw new Error('Extra admission plan not found');
        }
        const [rowsUpdated] = await ExtraAdmissionPlan.update({ qty, year, courseId }, { where: { id } });
        if (rowsUpdated === 0) {
            return null;
        }
        return await ExtraAdmissionPlan.findByPk(id);
    }
    catch (error) {
        console.error(`Error updating extra admission plan`, error);
        throw new Error('Failed to update extra admission plan');
    }
};
exports.updateExtraAdmissionPlan = updateExtraAdmissionPlan;
const deleteExtraAdmissionPlan = async (id) => {
    try {
        const extraAdmissionPlan = await ExtraAdmissionPlan.findByPk(id);
        if (!extraAdmissionPlan) {
            throw new Error(`Extra admission plan with id ${id} not found`);
        }
        await extraAdmissionPlan.destroy();
        return true;
    }
    catch (error) {
        throw new Error(`Failed to delete extra admission plan: ${error}`);
    }
};
exports.deleteExtraAdmissionPlan = deleteExtraAdmissionPlan;
exports.default = {
    getAllExtraAdmissionPlan: exports.getAllExtraAdmissionPlan,
    getOneExtraAdmissionPlan: exports.getOneExtraAdmissionPlan,
    createExtraAdmissionPlan: exports.createExtraAdmissionPlan,
    updateExtraAdmissionPlan: exports.updateExtraAdmissionPlan,
    deleteExtraAdmissionPlan: exports.deleteExtraAdmissionPlan
};
