"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeleteExtraAdmissionPlan = exports.handleUpdateExtraAdmissionPlan = exports.handleCreateExtraAdmissionPlan = exports.handleGetOneExtraAdmissionPlan = exports.handleGetAllExtraAdmissionPlan = void 0;
const extra_admission_plan_service_1 = __importDefault(require("../services/extra-admission-plan.service"));
const sequelize_1 = __importDefault(require("sequelize"));
const handleGetAllExtraAdmissionPlan = async (req, res) => {
    try {
        const { qty, year, courseId, keyword } = req.query;
        const query = { qty, year, courseId, keyword };
        const payload = await extra_admission_plan_service_1.default.getAllExtraAdmissionPlan(query);
        res.json({
            message: "get all extra admission plan was successful",
            payload,
        });
    }
    catch (error) {
        if (error instanceof sequelize_1.default.ValidationError) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "failed to get extra admission plans" });
        }
    }
};
exports.handleGetAllExtraAdmissionPlan = handleGetAllExtraAdmissionPlan;
const handleGetOneExtraAdmissionPlan = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = await extra_admission_plan_service_1.default.getOneExtraAdmissionPlan(id);
        if (!payload) {
            res.status(404).json({
                message: "extra admission plan not found",
            });
            return;
        }
        let headersSent = false;
        if (!headersSent) {
            res.status(200).json({
                message: "get one extra admission plan was successfully",
                payload
            });
            headersSent = true;
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "failed to get extra admission plan"
        });
    }
};
exports.handleGetOneExtraAdmissionPlan = handleGetOneExtraAdmissionPlan;
const handleCreateExtraAdmissionPlan = async (req, res) => {
    try {
        const body = req.body;
        const payload = await extra_admission_plan_service_1.default.createExtraAdmissionPlan(body);
        if (!payload) {
            return res.status(400).json({ message: "create extra admission plan was failed", payload });
        }
        return res.status(201).json({ message: "create extra admission plan was successfully", payload });
    }
    catch (error) {
        console.error(`Error creating extra admission plan:`, error);
        return res.status(400).json({ error: 'Unable to create extra admission plan' });
    }
};
exports.handleCreateExtraAdmissionPlan = handleCreateExtraAdmissionPlan;
const handleUpdateExtraAdmissionPlan = async (req, res) => {
    try {
        const { id } = req.params;
        const { ...dto } = req.body;
        const payload = await extra_admission_plan_service_1.default.updateExtraAdmissionPlan(id, dto);
        if (!payload) {
            return res.status(400).json({ message: "update extra admission plan failed" });
        }
        return res.status(200).json({ message: "update extra admission plan successfully", payload });
    }
    catch (error) {
        console.error(`Error updating extra admission plan`, error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.handleUpdateExtraAdmissionPlan = handleUpdateExtraAdmissionPlan;
const handleDeleteExtraAdmissionPlan = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await extra_admission_plan_service_1.default.deleteExtraAdmissionPlan(id);
        if (result) {
            res.status(204).end();
        }
        else {
            res.status(400).json({ error: 'Delete extra admission plan failed' });
        }
    }
    catch (error) {
        console.error(`Error deleting extra admission plan: ${error}`);
        res.status(500).json({ error: 'Unable to delete extra admission plan' });
    }
};
exports.handleDeleteExtraAdmissionPlan = handleDeleteExtraAdmissionPlan;
exports.default = {
    handleGetAllExtraAdmissionPlan: exports.handleGetAllExtraAdmissionPlan,
    handleGetOneExtraAdmissionPlan: exports.handleGetOneExtraAdmissionPlan,
    handleCreateExtraAdmissionPlan: exports.handleCreateExtraAdmissionPlan,
    handleUpdateExtraAdmissionPlan: exports.handleUpdateExtraAdmissionPlan,
    handleDeleteExtraAdmissionPlan: exports.handleDeleteExtraAdmissionPlan
};
