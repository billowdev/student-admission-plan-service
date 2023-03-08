import express from 'express';
import courseControllers, { handleGetOneCourse } from '../controllers/course.controller';
import { validateCreateCourse, validateCourseId, validateCourseQueryParams, validateUpdateCourse } from '../middlewares/course.middleware';

const router = express.Router();


router.get("/get-all", validateCourseQueryParams, courseControllers.handleGetAll)
router.get("/get-one/:id", validateCourseId, courseControllers.handleGetOneCourse)
router.get("/get-by-faculty/:faculty", courseControllers.handleGetAllCourseByFaculty)

router.post("/create", validateCreateCourse, courseControllers.handleCreateCourse)
router.patch("/update/:id", validateUpdateCourse, courseControllers.handleUpdateCourse)
router.delete("/delete/:id", validateCourseId, courseControllers.handleDeleteCourse)

export default router;
