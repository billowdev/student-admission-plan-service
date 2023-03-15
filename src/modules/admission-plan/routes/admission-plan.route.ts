import express from 'express';
import admissionPlanControllers from '../controllers/admission-plan.controller';
import { validateAdmissionPlan, validateAdmissionPlanQueryParams } from '../middlewares/admission-plan.middleware';
import { validateUUID } from './../../../middlewares/validate-uuid.common.middleware';

import { authMiddleware, roleMiddleware } from '../../../middlewares/auth.middleware';
import { UserRole } from '../../../modules/user/types/user.types';

const router = express.Router();

router.get("/get-all", validateAdmissionPlanQueryParams, admissionPlanControllers.handleGetAllAdmissionPlan)
router.get("/get-one/:id", validateUUID, admissionPlanControllers.handleGetOneAdmissionPlan)
router.get("/get-group-by-faculty", admissionPlanControllers.handleGetAllAdmissionPlanGroupByFaculty)

router.get("/get-by-course-id/:id", validateUUID, admissionPlanControllers.handleGetAllAdmissionPlanByCourseId)
router.get("/get-by-faculty/:faculty", admissionPlanControllers.handleGetAllAdmissionPlanByFaculty)
router.get("/get-exists-year", admissionPlanControllers.handleGetYearListAdmissionPlan)
router.get("/get-exists-faculty", admissionPlanControllers.handleGetFacultyListAdmissionPlan)

router.post("/create", validateAdmissionPlan, admissionPlanControllers.handleCreateAdmissionPlan)
router.patch("/update/:id", validateUUID, authMiddleware, admissionPlanControllers.handleUpdateAdmissionPlan)
router.delete("/delete/:id", validateUUID, authMiddleware, roleMiddleware(UserRole.ADMIN), admissionPlanControllers.handleDeleteAdmissionPlan)


export default router;
