import express from "express";
import { json } from 'body-parser';
import userController from './modules/user/controllers/user.controller';
import coursesRouter from "./modules/course/routes/course.route";
import admissionPlanRouter from "./modules/admission-plan/routes/admission-plan.route";
import extraAdmissionPlanRouter from "./modules/extra-admission-plan/routes/extra-admission-plan.route"

export const App = () => {

	const app = express()

	app.use(json());
	app.use('/courses', coursesRouter);
	app.use('/admission_plans', admissionPlanRouter);
	app.use('/extra_admission_plans', extraAdmissionPlanRouter);

	app.route("/users").get(userController.handleGetAll)
	app.route("/users/login").post(userController.handleLogin)
	app.route("/users/create").post(userController.handleCreateUser)

	app.get("/", (req, res) => {
		res.json("HELLO WORLD");
	})

	return app
}

export default App