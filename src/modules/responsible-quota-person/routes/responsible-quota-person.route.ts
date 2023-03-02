import express from 'express';
import responsibleQuotaPersonController from '../controllers/responsible-quota-person.controller'
import validateUUID from './../../../middlewares/validate-uuid.common.middleware';
const router = express.Router();


router.get("/get-all", responsibleQuotaPersonController.handleGetAllResponsibleQuotaPerson)
router.get("/get-one/:id", validateUUID, responsibleQuotaPersonController.handleGetOneResponsibleQuotaPerson)

router.post("/create", responsibleQuotaPersonController.handleCreateResponsibleQuotaPerson)
router.patch("/update/:id", responsibleQuotaPersonController.handleUpdateResponsibleQuotaPerson)
router.delete("/delete/:id", validateUUID,responsibleQuotaPersonController.handleDeleteResponsibleQuotaPerson)

export default router;
