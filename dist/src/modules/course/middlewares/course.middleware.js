"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateCourse = exports.validateCreateCourse = exports.validateCourseQueryParams = exports.validateCourseId = void 0;
const express_validator_1 = require("express-validator");
const uuidv4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[8-9a-b][0-9a-f]{3}-[0-9a-f]{12}$/i;
// Middleware function that validates the courseId parameter
exports.validateCourseId = [
    (0, express_validator_1.check)('id').matches(uuidv4Pattern).withMessage('Invalid courseId'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
exports.validateCourseQueryParams = [
    (0, express_validator_1.query)('major').optional().isString(),
    (0, express_validator_1.query)('degree').optional().isString(),
    (0, express_validator_1.query)('detail').optional().isString(),
    (0, express_validator_1.query)('faculty').optional().isString(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
function validateCreateCourse(req, res, next) {
    const course = req.body;
    const { degree, major, detail, faculty } = course;
    // Check that the degree field is not empty
    if (!degree) {
        res.status(400).json({ message: "degree field is required" });
        return;
    }
    if (!major) {
        res.status(400).json({ message: "major field is required" });
        return;
    }
    if (!detail) {
        res.status(400).json({ message: "detail field is required" });
        return;
    }
    if (!faculty) {
        res.status(400).json({ message: "faculty field is required" });
        return;
    }
    // If everything is valid, continue to the next middleware
    next();
}
exports.validateCreateCourse = validateCreateCourse;
exports.validateUpdateCourse = [
    (0, express_validator_1.check)('id').matches(uuidv4Pattern).withMessage('Invalid courseId'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const updates = req.body;
        // validate course attributes here, e.g.
        if (updates.degree && typeof updates.degree !== 'string') {
            return res.status(400).send('Degree must be a string');
        }
        if (updates.major && typeof updates.major !== 'string') {
            return res.status(400).send('Degree must be a string');
        }
        if (updates.detail && typeof updates.detail !== 'string') {
            return res.status(400).send('Degree must be a string');
        }
        if (updates.faculty && typeof updates.faculty !== 'string') {
            return res.status(400).send('Degree must be a string');
        }
        next();
    }
];
