import { NextFunction, Request, Response } from "express";
import { RequestHandlerParams } from 'express-serve-static-core';
import { check, query, validationResult } from 'express-validator';
import { CourseAttributes } from 'modules/course/types/course.type';
import { AdmissionPlanQueryInterface } from './../types/admission-plan.type';
import { AdmissionPlanAttributes } from 'modules/admission-plan/types/admission-plan.type';



export const validateAdmissionPlanQueryParams: RequestHandlerParams<{}, {}, {}, AdmissionPlanQueryInterface> = [
	query('quotaStatus').optional().isNumeric(),
	query('quotaSpecificSubject').optional().isString(),
	query('quotaDetail').optional().isString(),

	query('directStatus').optional().isNumeric(),
	query('directSpecificSubject').optional().isString(),
	query('directDetail').optional().isString(),

	query('cooperationStatus').optional().isNumeric(),
	query('cooperationSpecificSubject').optional().isString(),
	query('cooperationDetail').optional().isString(),
	query('year').optional().isNumeric(),
	query('keyword').optional().isString(),
	(req: RequestHandlerParams<{}, {}, {}, AdmissionPlanQueryInterface>, res: any, next: any) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	}
];

export function validateAdmissionPlan(req: Request, res: Response, next: NextFunction): void {
	const body: AdmissionPlanAttributes = req.body;
	const {
		quotaStatus, quotaGoodStudyQty,
		quotaGoodPersonQty,
		quotaGoodActivityIMQty,
		quotaGoodActivityLIQty,
		quotaGoodActivitySDDQty,
		quotaGoodSportQty,
		directStatus, directQty,
		cooperationStatus, cooperationQty,
		year, courseId, studyGroup,
	} = body;

	// Check that the degree field is not empty
	if (!year) {
		res.status(400).json({ message: "year field is required" });
		return;
	}
	if (!studyGroup) {
		res.status(400).json({ message: "studyGroup field is required" });
		return;
	}
	if (!courseId) {
		res.status(400).json({ message: "courseId field is required" });
		return;
	}
	// ==================== quota ===========================
	// if (quotaStatus && typeof quotaStatus !== 'boolean') {
	// 	res.status(400).json({ message: "quotaStatus field is required" });
	// 	return;
	// }
	
	
	if (!quotaGoodStudyQty && typeof quotaGoodStudyQty !== "number") {
		res.status(400).json({ message: "quotaGoodStudyQty field is required" });
		return;
	}
	if (!quotaGoodPersonQty && typeof quotaGoodPersonQty !== "number") {
		res.status(400).json({ message: "quotaGoodPersonQty field is required" });
		return;
	}
	if (!quotaGoodActivityIMQty && typeof quotaGoodActivityIMQty !== "number") {
		res.status(400).json({ message: "quotaGoodActivityIMQty field is required" });
		return;
	}
	if (!quotaGoodActivityLIQty && typeof quotaGoodActivityLIQty !== "number") {
		res.status(400).json({ message: "quotaGoodActivityLIQty field is required" });
		return;
	}
	if (!quotaGoodActivitySDDQty && typeof quotaGoodActivitySDDQty !== "number") {
		res.status(400).json({ message: "quotaGoodActivitySDDQty field is required" });
		return;
	}
	if (!quotaGoodSportQty && typeof quotaGoodSportQty !== "number") {
		res.status(400).json({ message: "quotaGoodSportQty field is required" });
		return;
	}
	// ==================== direct ===========================
	// if (!directStatus && typeof directStatus !== "boolean" ) {
	// 	res.status(400).json({ message: "directStatus field is required" });
	// 	return;
	// }


	if (!directQty && typeof directQty !== "number") {
		res.status(400).json({ message: "directQty field is required" });
		return;
	}
	// ==================== cooperation ===========================
	// if (!cooperationStatus && typeof cooperationStatus !== "boolean") {
	// 	res.status(400).json({ message: "cooperationStatus field is required" });
	// 	return;
	// }


	if (!cooperationQty && typeof cooperationQty !== "number") {
		res.status(400).json({ message: "cooperationQty field is required" });
		return;
	}
	// If everything is valid, continue to the next middleware
	next();
}

const uuidv4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[8-9a-b][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const validateUpdateCourse = [
	check('id').matches(uuidv4Pattern).withMessage('Invalid courseId'),
	(req: Request<{}, AdmissionPlanAttributes, { id: string }, {}>, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const updates: Partial<AdmissionPlanAttributes> = req.body;

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
		if (updates.quotaGoodStudyQty && typeof updates.quotaGoodStudyQty !== 'number') {
			return res.status(400).send('quotaGoodStudyQty must be a number');
		}
		if (updates.quotaGoodPersonQty && typeof updates.quotaGoodPersonQty !== 'number') {
			return res.status(400).send('quotaGoodPersonQty must be a number');
		}
		if (updates.quotaGoodActivityIMQty && typeof updates.quotaGoodActivityIMQty !== 'number') {
			return res.status(400).send('quotaGoodActivityIMQty must be a number');
		}
		if (updates.quotaGoodActivityLIQty && typeof updates.quotaGoodActivityLIQty !== 'number') {
			return res.status(400).send('quotaGoodActivityLIQty must be a number');
		}
		if (updates.quotaGoodActivitySDDQty && typeof updates.quotaGoodActivitySDDQty !== 'number') {
			return res.status(400).send('quotaGoodActivitySDDQty must be a number');
		}
		if (updates.quotaGoodSportQty && typeof updates.quotaGoodSportQty !== 'number') {
			return res.status(400).send('quotaGoodSportQty must be a number');
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
		if (updates.directQty && typeof updates.directQty !== 'number') {
			return res.status(400).send('directQty must be a number');
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
		if (updates.cooperationQty && typeof updates.cooperationQty !== 'number') {
			return res.status(400).send('directQty must be a number');
		}
		next();
	}
];