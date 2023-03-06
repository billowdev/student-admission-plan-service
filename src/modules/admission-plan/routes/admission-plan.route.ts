import express from 'express';
import admissionPlanControllers from '../controllers/admission-plan.controller';
import { validateAdmissionPlan, validateAdmissionPlanQueryParams } from '../middlewares/admission-plan.middleware';
import { validateUUID } from './../../../middlewares/validate-uuid.common.middleware';

import { authMiddleware } from '../../../middlewares/auth.middleware';

const router = express.Router();

router.get("/get-all", validateAdmissionPlanQueryParams, admissionPlanControllers.handleGetAllAdmissionPlan)
router.get("/get-one/:id", validateUUID, admissionPlanControllers.handleGetOneAdmissionPlan)
router.get("/get-by-course-id/:id", validateUUID, admissionPlanControllers.handleGetAllAdmissionPlanByCourseId)
router.get("/get-by-faculty/:faculty", admissionPlanControllers.handleGetAllAdmissionPlanByFaculty)
router.post("/create", validateAdmissionPlan, admissionPlanControllers.handleCreateAdmissionPlan)
router.patch("/update/:id", admissionPlanControllers.handleUpdateAdmissionPlan)
router.delete("/delete/:id", validateUUID, authMiddleware, admissionPlanControllers.handleDeleteAdmissionPlan)


export default router;
