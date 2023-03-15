import express from 'express';
import userControllers from '../controllers/user.controller';
import { validateUUID } from './../../../middlewares/validate-uuid.common.middleware';
import { authMiddleware, roleMiddleware } from './../../../middlewares/auth.middleware';
import { UserRole } from '../types/user.types';

const router = express.Router();

router.post("/login", userControllers.handleLogin)
router.get("/get-all", authMiddleware, roleMiddleware(UserRole.ADMIN), userControllers.handleGetAllUsers)
router.get("/get-one/:id", authMiddleware, roleMiddleware(UserRole.ADMIN), userControllers.handleGetOneUsers)
router.post("/create", authMiddleware, roleMiddleware(UserRole.ADMIN), userControllers.handleCreateUser)
router.patch("/update/:id", authMiddleware, userControllers.handleUpdateUser)
router.delete("/delete/:id", authMiddleware, roleMiddleware(UserRole.ADMIN), validateUUID,userControllers.handleDeleteUser)

export default router;
