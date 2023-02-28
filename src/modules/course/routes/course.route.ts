import express from 'express';
import courseControllers, { handleGetOneCourse } from '../controllers/course.controller';
import { validateCreateCourse, validateCourseId, validateCourseQueryParams, validateUpdateCourse } from '../middlewares/course.middleware';

const router = express.Router();

router.get("/get_all", validateCourseQueryParams, courseControllers.handleGetAll)
router.get("/get_one/:id", validateCourseId, courseControllers.handleGetOneCourse)
router.post("/create", validateCreateCourse, courseControllers.handleCreateCourse)
router.patch("/update/:id", validateUpdateCourse, courseControllers.handleUpdateCourse)
router.delete("/delete/:id", validateCourseId,courseControllers.handleDeleteCourse)

export default router;
