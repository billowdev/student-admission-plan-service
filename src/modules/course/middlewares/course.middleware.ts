import { CourseParamInterface, CourseQueryInterface } from "../types/course.type";
import { NextFunction, Request, Response } from "express";
import { RequestHandlerParams } from 'express-serve-static-core';
import { check, query, validationResult } from 'express-validator';
import { CourseAttributes } from 'modules/course/types/course.type';

const uuidv4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[8-9a-b][0-9a-f]{3}-[0-9a-f]{12}$/i;

// Middleware function that validates the courseId parameter
export const validateCourseId = [
	check('id').matches(uuidv4Pattern).withMessage('Invalid courseId'),
	(req: Request<{}, {}, CourseParamInterface, {}>, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	}
];


export const validateCourseQueryParams: RequestHandlerParams<{}, {}, {}, CourseQueryInterface> = [
	query('major').optional().isString(),
	query('degree').optional().isString(),
	query('detail').optional().isString(),
	query('faculty').optional().isString(),
	(req: RequestHandlerParams<{}, {}, {}, CourseQueryInterface>, res: any, next: any) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	}
];

export function validateCreateCourse(req: Request, res: Response, next: NextFunction): void {
	const course: CourseAttributes = req.body;
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


export const validateUpdateCourse = [
	check('id').matches(uuidv4Pattern).withMessage('Invalid courseId'),
	(req: Request<{}, CourseAttributes, CourseParamInterface, {}>, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const updates: Partial<CourseAttributes> = req.body;

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