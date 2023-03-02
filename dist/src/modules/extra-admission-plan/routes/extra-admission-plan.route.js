"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const extra_admission_plan_controller_1 = __importDefault(require("../controllers/extra-admission-plan.controller"));
const extra_admission_plan_middleware_1 = require("../middlewares/extra-admission-plan.middleware");
const validate_uuid_common_middleware_1 = require("./../../../middlewares/validate-uuid.common.middleware");
const router = express_1.default.Router();
router.get("/get-all", extra_admission_plan_middleware_1.validateExtraAdmissonPlanQueryParams, extra_admission_plan_controller_1.default.handleGetAllExtraAdmissionPlan);
router.get("/get-one/:id", validate_uuid_common_middleware_1.validateUUID, extra_admission_plan_controller_1.default.handleGetOneExtraAdmissionPlan);
router.post("/create", extra_admission_plan_middleware_1.validateCreateExtraAdmissionPlan, extra_admission_plan_controller_1.default.handleCreateExtraAdmissionPlan);
router.patch("/update/:id", validate_uuid_common_middleware_1.validateUUID, extra_admission_plan_controller_1.default.handleUpdateExtraAdmissionPlan);
router.delete("/delete/:id", validate_uuid_common_middleware_1.validateUUID, extra_admission_plan_controller_1.default.handleDeleteExtraAdmissionPlan);
exports.default = router;
