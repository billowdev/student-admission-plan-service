"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admission_plan_controller_1 = __importDefault(require("../controllers/admission-plan.controller"));
const admission_plan_middleware_1 = require("../middlewares/admission-plan.middleware");
const validate_uuid_common_middleware_1 = require("./../../../middlewares/validate-uuid.common.middleware");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const router = express_1.default.Router();
router.get("/get-all", admission_plan_middleware_1.validateAdmissionPlanQueryParams, admission_plan_controller_1.default.handleGetAllAdmissionPlan);
router.get("/get-one/:id", validate_uuid_common_middleware_1.validateUUID, admission_plan_controller_1.default.handleGetOneAdmissionPlan);
router.post("/create", admission_plan_middleware_1.validateAdmissionPlan, admission_plan_controller_1.default.handleCreateAdmissionPlan);
router.patch("/update/:id", admission_plan_controller_1.default.handleUpdateAdmissionPlan);
router.delete("/delete/:id", validate_uuid_common_middleware_1.validateUUID, auth_middleware_1.authMiddleware, admission_plan_controller_1.default.handleDeleteAdmissionPlan);
exports.default = router;
