import { NextFunction, Request, Response } from "express";
import { RequestHandlerParams } from 'express-serve-static-core';
import { check, query, validationResult } from 'express-validator';
import { uuidv4Pattern } from "../../../middlewares/validate-uuid.common.middleware";
import { ExtraAdmissionPlanQueryInterface } from "../types/extra-admission-plan.types";
import { ExtraAdmissionPlanAttributes, ExtraAdmissionPlanParamInterface } from './../types/extra-admission-plan.types';

export const validateExtraAdmissonPlanQueryParams: RequestHandlerParams<{}, {}, {}, ExtraAdmissionPlanQueryInterface> = [
	query('qty').optional().isString(),
	query('keyword').optional().isString(),
	query('year').optional().isString(),
	query('courseId').optional().isString(),
	(req: RequestHandlerParams<{}, {}, {}, ExtraAdmissionPlanQueryInterface>,
		res: any, next: any) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	}
];



export function validateCreateExtraAdmissionPlan(req: Request, res: Response, next: NextFunction): void {
	const body: ExtraAdmissionPlanAttributes = req.body;
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


export const validateUpdateExtraAdmissionPlan = [
	check('id').matches(uuidv4Pattern).withMessage('Invalid courseId'),
	(req: Request<{}, ExtraAdmissionPlanAttributes, ExtraAdmissionPlanParamInterface, {}>, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const updates: Partial<ExtraAdmissionPlanAttributes> = req.body;

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