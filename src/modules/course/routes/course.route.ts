import express from 'express';
import courseControllers, { handleGetOneCourse } from '../controllers/course.controller';
import { validateCourseId, validateCourseQueryParams } from '../middlewares/course.middleware';

const router = express.Router();

router.get("/", validateCourseQueryParams, courseControllers.handleGetAll)
router.get("/get-one/:id", validateCourseId, courseControllers.handleGetOneCourse)
router.post("/create", courseControllers.handleCreateCourse)
router.patch("/update", courseControllers.handleUpdateCourse)
router.delete("/delete", courseControllers.handleDeleteCourse)

export default router;
