import express from 'express';
import admissionPlanControllers from '../controllers/admission-plan.controller';
import { validateAdmissionPlan, validateAdmissionPlanQueryParams } from '../middlewares/admission-plan.middleware';
import { validateUUID } from './../../../middlewares/validate-uuid.common.middleware';
import { authMiddleware } from '../../../middlewares/auth.middleware'; 

const router = express.Router();

router.get("/get_all", validateAdmissionPlanQueryParams, admissionPlanControllers.handleGetAllAdmissionPlan)
router.get("/get_one/:id", validateUUID, admissionPlanControllers.handleGetOneAdmissionPlan)
router.post("/create", validateAdmissionPlan, admissionPlanControllers.handleCreateAdmissionPlan)
router.patch("/update/:id", admissionPlanControllers.handleUpdateAdmissionPlan)
router.delete("/delete/:id", validateUUID, authMiddleware, admissionPlanControllers.handleDeleteAdmissionPlan)

export default router;
