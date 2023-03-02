"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateExtraAdmissionPlan = exports.validateCreateExtraAdmissionPlan = exports.validateExtraAdmissonPlanQueryParams = void 0;
const express_validator_1 = require("express-validator");
const validate_uuid_common_middleware_1 = require("../../../middlewares/validate-uuid.common.middleware");
exports.validateExtraAdmissonPlanQueryParams = [
    (0, express_validator_1.query)('qty').optional().isString(),
    (0, express_validator_1.query)('keyword').optional().isString(),
    (0, express_validator_1.query)('year').optional().isString(),
    (0, express_validator_1.query)('courseId').optional().isString(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
function validateCreateExtraAdmissionPlan(req, res, next) {
    const body = req.body;
    const { qty, year, courseId } = body;
    // Check that the degree field is not empty
    if (!qty) {
        res.status(400).json({ message: "qty field is required" });
        return;
    }
    if (!year) {
        res.status(400).json({ message: "year field is required" });
        return;
    }
    if (!courseId) {
        res.status(400).json({ message: "courseId field is required" });
        return;
    }
    // If everything is valid, continue to the next middleware
    next();
}
exports.validateCreateExtraAdmissionPlan = validateCreateExtraAdmissionPlan;
exports.validateUpdateExtraAdmissionPlan = [
    (0, express_validator_1.check)('id').matches(validate_uuid_common_middleware_1.uuidv4Pattern).withMessage('Invalid courseId'),
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
        if (updates.courseId && typeof updates.courseId !== 'string') {
            return res.status(400).send('courseId must be a string');
        }
        if (updates.qty && typeof updates.qty !== 'number') {
            return res.status(400).send('qty must be a number');
        }
        next();
    }
];
