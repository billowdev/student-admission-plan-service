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
exports.deleteCourse = exports.updateCourse = exports.createCourse = exports.getOneCourse = exports.getAllCourse = void 0;
const sequelize_1 = __importStar(require("sequelize"));
const models_1 = __importDefault(require("../../../database/models"));
const is_all_undefined_1 = __importDefault(require("../../../common/utils/is-all-undefined"));
const Course = models_1.default.Course;
/**
 * Get all courses based on the given query parameters
 * @param {CourseQueryInterface} query - Query parameters to filter courses
 * @returns {Promise<CourseAttributes[]>} - Promise that resolves to an array of CourseAttributes objects
 */
const getAllCourse = async (query) => {
    try {
        let whereClause = {};
        const searchableFields = [
            "major",
            "degree",
            "faculty",
            "detail"
        ];
        if (!(0, is_all_undefined_1.default)(query)) {
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
        const response = await Course.findAll({
            where: whereClause,
            raw: true
        });
        return response;
    }
    catch (error) {
        console.error(`Error retrieving all course `, error);
        throw new Error('Unable to retrieve all course');
    }
    // try {
    // 	if (isAllValuesUndefined(query)) {
    // 		return await Course.findAll()
    // 	}
    // 	// Destructure the query object for readability
    // 	const { major, degree, faculty, detail, keyword } = query;
    // 	// Use destructuring assignment to simplify the code
    // 	const response = await Course.findAll({
    // 		where: {
    // 			[Op.or]: [
    // 				sequelize.where(sequelize.fn('LOWER', sequelize.col('major')), 'LIKE', `%${major}%`),
    // 				sequelize.where(sequelize.fn('LOWER', sequelize.col('degree')), 'LIKE', `%${degree}%`),
    // 				sequelize.where(sequelize.fn('LOWER', sequelize.col('faculty')), 'LIKE', `%${faculty}%`),
    // 				sequelize.where(sequelize.fn('LOWER', sequelize.col('detail')), 'LIKE', `%${detail}%`),
    // 				sequelize.literal(`LOWER(CONCAT_WS(' ', "major", "degree", "faculty", "detail")) LIKE '%${keyword}%'`)
    // 			]
    // 		},
    // 		raw: true
    // 	});
    // 	return response;
    // } catch (error) {
    // 	console.log('====================================');
    // 	console.log(error);
    // 	console.log('====================================');
    // 	throw new Error('Unable to get all courses');
    // }
};
exports.getAllCourse = getAllCourse;
const getOneCourse = async (id) => {
    try {
        const response = await Course.findByPk(id);
        if (!response) {
            throw new Error('Course not found');
        }
        return response;
    }
    catch (error) {
        throw new Error('Unable to retrieve course');
    }
};
exports.getOneCourse = getOneCourse;
const createCourse = async (dto) => {
    try {
        const response = await Course.create(dto);
        return response;
    }
    catch (error) {
        throw new Error('Unable to create course');
    }
};
exports.createCourse = createCourse;
const updateCourse = async (id, dto) => {
    try {
        const response = await Course.update({ ...dto }, {
            returning: true,
            where: { id },
        });
        if (!response[1]) {
            throw new Error('Course not found');
        }
        return {
            id,
            ...dto
        };
    }
    catch (error) {
        throw new Error('Unable to update course');
    }
};
exports.updateCourse = updateCourse;
const deleteCourse = async (id) => {
    try {
        // delete extra admission plaln
        await models_1.default.ExtraAdmissionPlan.destroy({
            where: {
                courseId: id
            }
        });
        const response = await Course.destroy({
            where: { id },
            raw: true
        });
        return response;
    }
    catch (error) {
        throw new Error('Unable to delete course');
    }
};
exports.deleteCourse = deleteCourse;
exports.default = {
    getAllCourse: exports.getAllCourse,
    getOneCourse: exports.getOneCourse,
    createCourse: exports.createCourse,
    updateCourse: exports.updateCourse,
    deleteCourse: exports.deleteCourse
};
