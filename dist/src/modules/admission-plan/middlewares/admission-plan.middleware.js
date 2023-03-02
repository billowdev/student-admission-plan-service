"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateCourse = exports.validateAdmissionPlan = exports.validateAdmissionPlanQueryParams = void 0;
const express_validator_1 = require("express-validator");
exports.validateAdmissionPlanQueryParams = [
    (0, express_validator_1.query)('quotaStatus').optional().isNumeric(),
    (0, express_validator_1.query)('quotaSpecificSubject').optional().isString(),
    (0, express_validator_1.query)('quotaDetail').optional().isString(),
    (0, express_validator_1.query)('directStatus').optional().isNumeric(),
    (0, express_validator_1.query)('directSpecificSubject').optional().isString(),
    (0, express_validator_1.query)('directDetail').optional().isString(),
    (0, express_validator_1.query)('cooperationStatus').optional().isNumeric(),
    (0, express_validator_1.query)('cooperationSpecificSubject').optional().isString(),
    (0, express_validator_1.query)('cooperationDetail').optional().isString(),
    (0, express_validator_1.query)('year').optional().isNumeric(),
    (0, express_validator_1.query)('keyword').optional().isString(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
function validateAdmissionPlan(req, res, next) {
    const body = req.body;
    const { quotaStatus, quotaSpecificSubject, quotaDetail, directStatus, directSpecificSubject, directDetail, cooperationStatus, cooperationSpecificSubject, cooperationDetail, year, courseId } = body;
    // Check that the degree field is not empty
    if (!year) {
        res.status(400).json({ message: "year field is required" });
        return;
    }
    if (year && typeof year !== 'number') {
        res.status(400).json({ message: "year field must be numberr" });
        return;
    }
    if (!courseId) {
        res.status(400).json({ message: "courseId field is required" });
        return;
    }
    // ==================== quota ===========================
    if (!quotaStatus) {
        res.status(400).json({ message: "quotaStatus field is required" });
        return;
    }
    if (!quotaSpecificSubject) {
        res.status(400).json({ message: "quotaSpecificSubject field is required" });
        return;
    }
    if (!quotaDetail) {
        res.status(400).json({ message: "quotaDetail field is required" });
        return;
    }
    // ==================== direct ===========================
    if (!directStatus) {
        res.status(400).json({ message: "directStatus field is required" });
        return;
    }
    if (!directSpecificSubject) {
        res.status(400).json({ message: "directSpecificSubject field is required" });
        return;
    }
    if (!directDetail) {
        res.status(400).json({ message: "directDetail field is required" });
        return;
    }
    // ==================== cooperation ===========================
    if (!cooperationStatus) {
        res.status(400).json({ message: "cooperationStatus field is required" });
        return;
    }
    if (!cooperationSpecificSubject) {
        res.status(400).json({ message: "cooperationSpecificSubject field is required" });
        return;
    }
    if (!cooperationDetail) {
        res.status(400).json({ message: "cooperationDetail field is required" });
        return;
    }
    // If everything is valid, continue to the next middleware
    next();
}
exports.validateAdmissionPlan = validateAdmissionPlan;
const uuidv4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[8-9a-b][0-9a-f]{3}-[0-9a-f]{12}$/i;
exports.validateUpdateCourse = [
    (0, express_validator_1.check)('id').matches(uuidv4Pattern).withMessage('Invalid courseId'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const updates = req.body;
        // validate course attributes here, e.g.
        if (updates.year && typeof updates.year !== 'number') {
            return res.status(400).send('year must be a number');
        }
        if (updates.quotaStatus && typeof updates.quotaStatus !== 'number') {
            return res.status(400).send('quotaStatus must be a number');
        }
        if (updates.quotaSpecificSubject && typeof updates.quotaSpecificSubject !== 'string') {
            return res.status(400).send('quotaSpecificSubject must be a string');
        }
        if (updates.quotaDetail && typeof updates.quotaDetail !== 'string') {
            return res.status(400).send('quotaSpecificSubject must be a string');
        }
        // =========== direct
        if (updates.directStatus && typeof updates.directStatus !== 'number') {
            return res.status(400).send('directStatus must be a number');
        }
        if (updates.directSpecificSubject && typeof updates.directSpecificSubject !== 'string') {
            return res.status(400).send('directSpecificSubject must be a string');
        }
        if (updates.directDetail && typeof updates.directDetail !== 'string') {
            return res.status(400).send('quotaSpecificSubject must be a string');
        }
        // =========== cooperation
        if (updates.cooperationStatus && typeof updates.cooperationStatus !== 'number') {
            return res.status(400).send('cooperationStatus must be a number');
        }
        if (updates.cooperationSpecificSubject && typeof updates.cooperationSpecificSubject !== 'string') {
            return res.status(400).send('cooperationSpecificSubject must be a string');
        }
        if (updates.cooperationDetail && typeof updates.cooperationDetail !== 'string') {
            return res.status(400).send('quotaSpecificSubject must be a string');
        }
        next();
    }
];
