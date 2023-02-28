import { CourseParamInterface, CourseQueryInterface } from "../types/course.type";
import { NextFunction, Request, Response } from "express";
import { RequestHandlerParams } from 'express-serve-static-core';
import { check, query, validationResult } from 'express-validator';

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


// export const validateCourseId = (req: Request, res: Response, next: NextFunction) => {
// 	check('id').matches(uuidv4Pattern).withMessage('Invalid courseId')(req, res, (err) => {
// 	  if (err) {
// 		return res.status(400).json({ errors: err.array() });
// 	  }
// 	  next();
// 	});
//   };

export const validateCourseQueryParams: RequestHandlerParams<{}, {}, {}, CourseQueryInterface> = [
	query('major').optional().isString(),
	query('degree').optional().isString(),
	query('qualification').optional().isString(),
	query('faculty').optional().isString(),
	(req:RequestHandlerParams<{}, {}, {}, CourseQueryInterface>, res:any, next:any) => {
	  const errors = validationResult(req);
	  if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	  }
	  next();
	}
  ];


// export const validateCourseQueryParams: RequestHandlerParams<{}, {}, {}, CourseQueryInterface> = [
// 	query('major').optional().isString(),
// 	query('degree').notEmpty().isString(),
// 	query('qualification').optional().isString(),
// 	query('faculty').optional().isString(),
// 	(req: Request<{}, {}, {}, CourseQueryInterface>, res: Response, next: NextFunction) => {
// 	  const errors = validationResult(req);
// 	  if (!errors.isEmpty()) {
// 		return res.status(400).json({ errors: errors.array() });
// 	  }
// 	  next();
// 	}
//   ];

  
// export const validateCourseQueryParams = [
// 	check('major').optional().isString(),
// 	check('degree').optional().isString(),
// 	check('qualification').optional().isString(),
// 	check('faculty').optional().isString(),
// 	(req: Request<{}, {}, {}, CourseQueryInterface>, res: Response, next: NextFunction) => {
// 		const errors = validationResult(req);
// 		if (!errors.isEmpty()) {
// 			return res.status(400).json({ errors: errors.array() });
// 		}
// 		next();
// 	},
// ];