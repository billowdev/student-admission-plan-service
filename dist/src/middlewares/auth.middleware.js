"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMiddleware = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Import the necessary interfaces and models
const models_1 = __importDefault(require("../database/models"));
const common_constants_1 = require("../common/constants/common.constants");
const User = models_1.default.User;
class AuthError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AuthError';
    }
}
const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            res.status(401).json({ message: 'No token provided' });
        }
        else {
            const decodedToken = jsonwebtoken_1.default.verify(token, common_constants_1.JWT_SECRET);
            if (new Date().getTime() > decodedToken.exp * 1000) {
                throw new AuthError('Token expired');
            }
            const user = await User.findByPk(decodedToken.id, { raw: true });
            if (!user) {
                throw new AuthError('Unauthorized');
            }
            req.user = user;
            next();
        }
    }
    catch (error) {
        console.error(error);
        if (error instanceof AuthError) {
            res.status(401).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
exports.authMiddleware = authMiddleware;
const roleMiddleware = (role) => {
    return (req, res, next) => {
        if (!("user" in req)) {
            throw new Error("Request object without user found unexpectedly");
        }
        const userRole = req.user.role;
        if (userRole !== role) {
            res.status(403).json({ message: `Only ${role}s can access this resource` });
        }
        else {
            next();
        }
    };
};
exports.roleMiddleware = roleMiddleware;
