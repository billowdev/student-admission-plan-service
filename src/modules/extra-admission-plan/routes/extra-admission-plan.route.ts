import express from 'express';
import { authMiddleware, roleMiddleware } from '../../../middlewares/auth.middleware';
import { UserRole } from '../../../modules/user/types/user.types';
import extraAdminssionPlanControllers from '../controllers/extra-admission-plan.controller';
import { validateCreateExtraAdmissionPlan, validateExtraAdmissonPlanQueryParams } from '../middlewares/extra-admission-plan.middleware';
import { validateUUID } from './../../../middlewares/validate-uuid.common.middleware';

const router = express.Router();

router.get("/get-all", extraAdminssionPlanControllers.handleGetAllExtraAdmissionPlan)
router.get("/get-group-by-faculty", extraAdminssionPlanControllers.handleGetAllExtraAdmissionPlanGroupByFaculty)
router.get("/get-by-faculty/:faculty", extraAdminssionPlanControllers.handleGetAllExtraAdmissionPlanByFaculty)
router.get("/get-exists-year", extraAdminssionPlanControllers.handleGetYearListExtraAdmissionPlan)
router.get("/get-exists-faculty", extraAdminssionPlanControllers.handleGetFacultyListExtraAdmissionPlan)

router.get("/get-one/:id", validateUUID, extraAdminssionPlanControllers.handleGetOneExtraAdmissionPlan)
router.post("/create", validateCreateExtraAdmissionPlan, authMiddleware, extraAdminssionPlanControllers.handleCreateExtraAdmissionPlan)
router.patch("/update/:id", validateUUID, authMiddleware, extraAdminssionPlanControllers.handleUpdateExtraAdmissionPlan)
router.delete("/delete/:id", validateUUID, authMiddleware, roleMiddleware(UserRole.ADMIN), extraAdminssionPlanControllers.handleDeleteExtraAdmissionPlan)

export default router;
