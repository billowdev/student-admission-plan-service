import express from "express";
import { json } from 'body-parser';
import userController from './modules/user/controllers/user.controller';
import coursesRouter from "./modules/course/routes/course.route";
import admissionPlanRouter from "./modules/admission-plan/routes/admission-plan.route";
import extraAdmissionPlanRouter from "./modules/extra-admission-plan/routes/extra-admission-plan.route"
import userRouter from './modules/user/routes/user.route'

import {  UserInterface } from './modules/user/types/user.types';

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
	app.use('/courses', coursesRouter);
	app.use('/admission-plans', admissionPlanRouter);
	app.use('/extra-admission-plans', extraAdmissionPlanRouter);
	app.use('/users', userRouter)

	app.get("/", (req, res) => {
		res.json("HELLO WORLD");
	})

	return app
}

export default App