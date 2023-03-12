"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeleteCourse = exports.handleUpdateCourse = exports.handleCreateCourse = exports.handleGetOneCourse = exports.handleGetAll = void 0;
const course_service_1 = __importDefault(require("./../services/course.service"));
const handleGetAll = async (req, res) => {
    try {
        const payload = await course_service_1.default.getAllCourse(req.query);
        if (!payload)
            return res.status(400).json({
                error: "Failed to retrieve all courses",
            });
        res.status(200).json({
            message: "Retrieved all courses successfully",
            payload
        });
    }
    catch (error) {
        res.status(400).json({
            error: `Error retrieving all courses: ${error.message}`
        });
    }
};
exports.handleGetAll = handleGetAll;
const handleGetOneCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const payload = await course_service_1.default.getOneCourse(id);
        if (!payload) {
            res.status(404).json({ error: 'Course not found' });
            return;
        }
        res.status(200).json({ message: "Retrieved course successfully", payload });
    }
    catch (error) {
        console.error(`Error retrieving course ${id}: `, error);
        res.status(400).json({ error: `Error retrieving course ${id}: ${error.message}` });
    }
};
exports.handleGetOneCourse = handleGetOneCourse;
const handleCreateCourse = async (req, res) => {
    try {
        const body = req.body;
        const payload = await course_service_1.default.createCourse(body);
        if (!payload)
            return res.status(400).json({ error: "Failed to create course" });
        res.status(201).json({ message: "Created course successfully", payload });
    }
    catch (error) {
        console.error(`Error creating course: `, error);
        res.status(400).json({ error: `Error creating course: ${error.message}` });
    }
};
exports.handleCreateCourse = handleCreateCourse;
const handleUpdateCourse = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const payload = await course_service_1.default.updateCourse(id, body);
        if (!payload)
            return res.status(400).json({ error: "Failed to update course" });
        res.status(200).json({ message: "Updated course successfully", payload });
    }
    catch (error) {
        res.status(400).json({ error: `Error updating course: ${error.message}` });
    }
};
exports.handleUpdateCourse = handleUpdateCourse;
const handleDeleteCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const payload = await course_service_1.default.deleteCourse(id);
        if (payload)
            res.status(200).json({ message: "delete course successfully", payload });
        else
            res.status(400).json({ message: "delete course failed" });
    }
    catch (error) {
        res.status(400).json({ error: 'Unable to delete course' });
    }
};
exports.handleDeleteCourse = handleDeleteCourse;
exports.default = {
    handleGetAll: exports.handleGetAll,
    handleGetOneCourse: exports.handleGetOneCourse,
    handleCreateCourse: exports.handleCreateCourse,
    handleUpdateCourse: exports.handleUpdateCourse,
    handleDeleteCourse: exports.handleDeleteCourse
};
