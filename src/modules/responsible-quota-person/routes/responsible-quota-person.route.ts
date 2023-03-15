import express from 'express';
import { UserRole } from '../../../modules/user/types/user.types';
import { authMiddleware, roleMiddleware } from '../../../middlewares/auth.middleware';
import responsibleQuotaPersonController from '../controllers/responsible-quota-person.controller'
import validateUUID from './../../../middlewares/validate-uuid.common.middleware';
const router = express.Router();


router.get("/get-all", responsibleQuotaPersonController.handleGetAllRQP)
router.get("/get-one/:id", responsibleQuotaPersonController.handleGetOneRQP)

router.post("/create", authMiddleware, responsibleQuotaPersonController.handleCreateRQP)
router.patch("/update/:id", authMiddleware, responsibleQuotaPersonController.handleUpdateRQP)
router.delete("/delete/:id", authMiddleware, roleMiddleware(UserRole.ADMIN), validateUUID, responsibleQuotaPersonController.handleDeleteRQP)

export default router;
