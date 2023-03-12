"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeleteAdmissionPlan = exports.handleUpdateAdmissionPlan = exports.handleCreateAdmissionPlan = exports.handleGetYearListAdmissionPlan = exports.handleGetAllAdmissionPlanByFaculty = exports.handleGetAllAdmissionPlanByCourseId = exports.handleGetOneAdmissionPlan = exports.handleGetAllAdmissionPlan = void 0;
const admission_plan_service_1 = __importDefault(require("./../services/admission-plan.service"));
// Renamed AdmissionPlanService to admissionPlanService to follow camelCase convention.
// Changed message and error object in the response of the handleGetAllAdmissionPlan() function for consistency.
const handleGetAllAdmissionPlan = async (req, res) => {
    try {
        const payload = await admission_plan_service_1.default.getAllAdmissionPlan(req.query);
        res.status(200).json({
            message: "Get all admission plans successful",
            payload,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Something went wrong while fetching admission plans",
            error,
        });
    }
};
exports.handleGetAllAdmissionPlan = handleGetAllAdmissionPlan;
const handleGetOneAdmissionPlan = async (req, res) => {
    const id = req.params.id;
    try {
        const payload = await admission_plan_service_1.default.getOneAdmissionPlan(id);
        if (!payload) {
            res.status(404).json({ error: 'Admission plan not found' });
            return;
        }
        res.json({ message: "Admission plan retrieved successfully", payload });
    }
    catch (error) {
        console.error(`Error retrieving admission plan ${id}: `, error);
        res.status(400).json({ error: 'Unable to retrieve admission plan' });
    }
};
exports.handleGetOneAdmissionPlan = handleGetOneAdmissionPlan;
const handleGetAllAdmissionPlanByCourseId = async (req, res) => {
    const id = req.params.id;
    try {
        const payload = await admission_plan_service_1.default.getAllAdmissionPlanByCourseId(id);
        if (!payload) {
            res.status(404).json({ error: 'Admission plan not found' });
            return;
        }
        res.json({ message: "Admission plan retrieved successfully", payload });
    }
    catch (error) {
        console.error(`Error retrieving admission plan ${id}: `, error);
        res.status(400).json({ error: 'Unable to retrieve admission plan' });
    }
};
exports.handleGetAllAdmissionPlanByCourseId = handleGetAllAdmissionPlanByCourseId;
const handleGetAllAdmissionPlanByFaculty = async (req, res) => {
    const faculty = req.params.faculty;
    const query = req.query;
    try {
        const payload = await admission_plan_service_1.default.getAllAdmissionPlanByFaculty(faculty, query);
        if (!payload) {
            res.status(404).json({ error: 'Admission plan not found' });
            return;
        }
        res.status(200).json({ message: "Admission plan retrieved successfully", payload });
    }
    catch (error) {
        console.error(`Error retrieving admission plan ${faculty}: `, error);
        res.status(400).json({ error: 'Unable to retrieve admission plan' });
    }
};
exports.handleGetAllAdmissionPlanByFaculty = handleGetAllAdmissionPlanByFaculty;
const handleGetYearListAdmissionPlan = async (req, res) => {
    try {
        const payload = await admission_plan_service_1.default.getYearlistAdmissionPlan();
        if (!payload) {
            res.status(404).json({ error: 'Admission plan not found' });
            return;
        }
        res.status(200).json({ message: "Admission plan retrieved successfully", payload });
    }
    catch (error) {
        console.error(`Error retrieving year list of admission plan: `, error);
        res.status(400).json({ error: 'Unable to retrieve admission plan' });
    }
};
exports.handleGetYearListAdmissionPlan = handleGetYearListAdmissionPlan;
/** 03-02-2023 08-08AM
 * added an import statement for admissionPlanService
 * I renamed the body variable to admissionPlanDto for clarity
 * changed the response message from "create admission plan was successfully" to
 * "Admission plan created successfully" for consistency with RESTful API conventions
 * changed the name of the payload variable to createdAdmissionPlan to make it more clear what it represents
 */
const handleCreateAdmissionPlan = async (req, res) => {
    try {
        const admissionPlanDto = req.body;
        const createdAdmissionPlan = await admission_plan_service_1.default.createAdmissionPlan(admissionPlanDto);
        res.status(201).json({ message: "Admission plan created successfully", payload: createdAdmissionPlan });
    }
    catch (error) {
        console.error(`Error creating admission plan: `, error);
        res.status(400).json({ error: 'Unable to create admission plan' });
    }
};
exports.handleCreateAdmissionPlan = handleCreateAdmissionPlan;
const handleUpdateAdmissionPlan = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const payload = await admission_plan_service_1.default.updateAdmissionPlan(id, body);
        if (payload) {
            res.status(200).json({ message: "update admission plan was successfully", payload });
        }
        else {
            res.status(404).json({ error: 'Admission plan not found' });
        }
    }
    catch (error) {
        console.error(`Error updating admission plan: `, error);
        res.status(400).json({ error: 'Unable to update admission plan' });
    }
};
exports.handleUpdateAdmissionPlan = handleUpdateAdmissionPlan;
const handleDeleteAdmissionPlan = async (req, res) => {
    const id = req.params.id;
    try {
        const payload = await admission_plan_service_1.default.deleteAdmissionPlan(id);
        if (payload) {
            res.status(200).json({ message: "delete admission plan was successful" });
        }
        else {
            res.status(404).json({ error: 'Admission plan not found' });
        }
    }
    catch (error) {
        console.error(`Error deleting admission plan ${id}: `, error);
        res.status(400).json({ error: 'Unable to delete admission plan' });
    }
};
exports.handleDeleteAdmissionPlan = handleDeleteAdmissionPlan;
exports.default = {
    handleGetAllAdmissionPlan: exports.handleGetAllAdmissionPlan,
    handleGetOneAdmissionPlan: exports.handleGetOneAdmissionPlan,
    handleCreateAdmissionPlan: exports.handleCreateAdmissionPlan,
    handleUpdateAdmissionPlan: exports.handleUpdateAdmissionPlan,
    handleDeleteAdmissionPlan: exports.handleDeleteAdmissionPlan,
    handleGetAllAdmissionPlanByFaculty: exports.handleGetAllAdmissionPlanByFaculty,
    handleGetAllAdmissionPlanByCourseId: exports.handleGetAllAdmissionPlanByCourseId,
    handleGetYearListAdmissionPlan: exports.handleGetYearListAdmissionPlan
};
