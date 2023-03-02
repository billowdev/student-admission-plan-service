import express from 'express';
import extraAdminssionPlanControllers from '../controllers/extra-admission-plan.controller';
import { validateCreateExtraAdmissionPlan, validateExtraAdmissonPlanQueryParams } from '../middlewares/extra-admission-plan.middleware';
import { validateUUID } from './../../../middlewares/validate-uuid.common.middleware';

const router = express.Router();

router.get("/get_all", validateExtraAdmissonPlanQueryParams, extraAdminssionPlanControllers.handleGetAllExtraAdmissionPlan)
router.get("/get_one/:id", validateUUID, extraAdminssionPlanControllers.handleGetOneExtraAdmissionPlan)
router.post("/create", validateCreateExtraAdmissionPlan, extraAdminssionPlanControllers.handleCreateExtraAdmissionPlan)
router.patch("/update/:id", validateUUID, extraAdminssionPlanControllers.handleUpdateExtraAdmissionPlan)
router.delete("/delete/:id", validateUUID,extraAdminssionPlanControllers.handleDeleteExtraAdmissionPlan)

export default router;
