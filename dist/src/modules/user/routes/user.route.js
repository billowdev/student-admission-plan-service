"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const validate_uuid_common_middleware_1 = require("./../../../middlewares/validate-uuid.common.middleware");
const auth_middleware_1 = require("./../../../middlewares/auth.middleware");
const user_types_1 = require("../types/user.types");
const router = express_1.default.Router();
router.post("/login", user_controller_1.default.handleLogin);
router.get("/get-all", auth_middleware_1.authMiddleware, (0, auth_middleware_1.roleMiddleware)(user_types_1.UserRole.ADMIN), user_controller_1.default.handleGetAllUsers);
router.post("/create", auth_middleware_1.authMiddleware, (0, auth_middleware_1.roleMiddleware)(user_types_1.UserRole.ADMIN), user_controller_1.default.handleCreateUser);
router.patch("/update/:id", auth_middleware_1.authMiddleware, user_controller_1.default.handleUpdateUser);
router.delete("/delete/:id", auth_middleware_1.authMiddleware, (0, auth_middleware_1.roleMiddleware)(user_types_1.UserRole.ADMIN), validate_uuid_common_middleware_1.validateUUID, user_controller_1.default.handleDeleteUser);
exports.default = router;
