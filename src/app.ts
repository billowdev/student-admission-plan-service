import express from "express";
import { json } from 'body-parser';
import userController from './modules/user/controllers/user.controller';

import coursesRouter from "./modules/course/routes/course.route";
import admissionPlanRouter from "./modules/admission-plan/routes/admission-plan.route";
import extraAdmissionPlanRouter from "./modules/extra-admission-plan/routes/extra-admission-plan.route"
import userRouter from './modules/user/routes/user.route'
import responsibleQuotaPersonRouter from './modules/responsible-quota-person/routes/responsible-quota-person.route'

import { UserInterface } from './modules/user/types/user.types';

declare global {
	namespace Express {
		interface Request {
			user?: UserInterface;
		}
	}
}

export const App = () => {


	const app = express()

	app.use(json());

	app.use('/users', userRouter)
	app.use('/admission-plans', admissionPlanRouter);
	app.use('/extra-admission-plans', extraAdmissionPlanRouter);
	app.use('/responsible-quota-perons', responsibleQuotaPersonRouter);
	app.use('/courses', coursesRouter);


	app.get("/", (req, res) => {
		res.end("this is student admission plan service");
	})

	return app
}

export default App