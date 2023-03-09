import express from 'express';
import responsibleQuotaPersonController from '../controllers/responsible-quota-person.controller'
import validateUUID from './../../../middlewares/validate-uuid.common.middleware';
const router = express.Router();


router.get("/get-all", responsibleQuotaPersonController.handleGetAllRQP)
router.get("/get-one/:id", responsibleQuotaPersonController.handleGetOneRQP)

router.post("/create", responsibleQuotaPersonController.handleCreateRQP)
router.patch("/update/:id", responsibleQuotaPersonController.handleUpdateRQP)
router.delete("/delete/:id", validateUUID,responsibleQuotaPersonController.handleDeleteRQP)

export default router;
