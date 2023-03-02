"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUUID = exports.uuidv4Pattern = void 0;
const express_validator_1 = require("express-validator");
exports.uuidv4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[8-9a-b][0-9a-f]{3}-[0-9a-f]{12}$/i;
// Middleware function that validates the courseId parameter
exports.validateUUID = [
    (0, express_validator_1.check)('id').matches(exports.uuidv4Pattern).withMessage('Invalid courseId'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
exports.default = exports.validateUUID;
