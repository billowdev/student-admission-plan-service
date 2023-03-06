"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const responsible_quota_person_controller_1 = __importDefault(require("../controllers/responsible-quota-person.controller"));
const validate_uuid_common_middleware_1 = __importDefault(require("./../../../middlewares/validate-uuid.common.middleware"));
const router = express_1.default.Router();
router.get("/get-all", responsible_quota_person_controller_1.default.handleGetAllRQP);
router.get("/get-one/:id", validate_uuid_common_middleware_1.default, responsible_quota_person_controller_1.default.handleGetOneRQP);
router.post("/create", responsible_quota_person_controller_1.default.handleCreateRQP);
router.patch("/update/:id", responsible_quota_person_controller_1.default.handleUpdateRQP);
router.delete("/delete/:id", validate_uuid_common_middleware_1.default, responsible_quota_person_controller_1.default.handleDeleteRQP);
exports.default = router;
