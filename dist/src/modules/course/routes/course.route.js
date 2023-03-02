"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const course_controller_1 = __importDefault(require("../controllers/course.controller"));
const course_middleware_1 = require("../middlewares/course.middleware");
const router = express_1.default.Router();
router.get("/get-all", course_middleware_1.validateCourseQueryParams, course_controller_1.default.handleGetAll);
router.get("/get-one/:id", course_middleware_1.validateCourseId, course_controller_1.default.handleGetOneCourse);
router.post("/create", course_middleware_1.validateCreateCourse, course_controller_1.default.handleCreateCourse);
router.patch("/update/:id", course_middleware_1.validateUpdateCourse, course_controller_1.default.handleUpdateCourse);
router.delete("/delete/:id", course_middleware_1.validateCourseId, course_controller_1.default.handleDeleteCourse);
exports.default = router;
