import express from 'express';
import admissionPlanControllers from '../controllers/admission-plan.controller';

const router = express.Router();

router.get("/get_all", admissionPlanControllers.handleGetAllAdmissionPlan)
// router.get("/get_one/:id", validateCourseId, admissionPlanControllers.handleGetOneCourse)
// router.post("/create", validateCreateCourse, admissionPlanControllers.handleCreateCourse)
// router.patch("/update/:id", validateUpdateCourse, admissionPlanControllers.handleUpdateCourse)
// router.delete("/delete/:id", validateCourseId,admissionPlanControllers.handleDeleteCourse)

export default router;
