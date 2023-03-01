import { NextFunction, Request, Response } from "express";
import { RequestHandlerParams } from 'express-serve-static-core';
import { check, query, validationResult } from 'express-validator';
import { ExtraAdminssionPlanQueryInterface } from "../types/extra-admission-plan.types";
import { ExtraAdminssionPlanAttributes } from './../types/extra-admission-plan.types';

export const validateExtraAdmissonPlanQueryParams: RequestHandlerParams<{}, {}, {}, ExtraAdminssionPlanQueryInterface> = [
	query('qty').optional().isString(),
	query('keyword').optional().isString(),
	query('year').optional().isString(),
	query('courseId').optional().isString(),
	(req: RequestHandlerParams<{}, {}, {}, ExtraAdminssionPlanQueryInterface>,
		res: any, next: any) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	}
];