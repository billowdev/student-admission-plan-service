import express from 'express';
import { UserRole } from '../../../modules/user/types/user.types';
import { authMiddleware, roleMiddleware } from '../../../middlewares/auth.middleware';
import courseControllers, { handleGetOneCourse } from '../controllers/course.controller';
import { validateCreateCourse, validateCourseId, validateCourseQueryParams, validateUpdateCourse } from '../middlewares/course.middleware';

const router = express.Router();


router.get("/get-all", validateCourseQueryParams, courseControllers.handleGetAll)
router.get("/get-one/:id", validateCourseId, courseControllers.handleGetOneCourse)
router.get("/get-by-faculty/:faculty", courseControllers.handleGetAllCourseByFaculty)

router.post("/create", validateCreateCourse, courseControllers.handleCreateCourse)
router.patch("/update/:id", validateUpdateCourse, authMiddleware, courseControllers.handleUpdateCourse)
router.delete("/delete/:id", validateCourseId, authMiddleware, roleMiddleware(UserRole.ADMIN), courseControllers.handleDeleteCourse)

export default router;
