import express from "express";
import { json } from 'body-parser';
import userController from './modules/user/controllers/user.controller';
import courseController from "./modules/course/controllers/course.controller";
import extraAdmissionPlanController from "./modules/extra-admission-plan/controllers/extra-admission-plan.controller";
import { validateCourseId } from './modules/course/middlewares/course.middleware';
import coursesRouter from "./modules/course/routes/course.route";
import admissionPlanRouter from "./modules/admission-plan/routes/admission-plan.route";

export const App = () => {

	const app = express()

	app.use(json());
	app.use('/courses', coursesRouter);
	app.use('/admission_plans', admissionPlanRouter);
	app.route("/users").get(userController.handleGetAll)
	app.route("/users/login").post(userController.handleLogin)
	app.route("/users/create").post(userController.handleCreateUser)

	app.get("/", (req, res) => {
		res.json("HELLO WORLD");
	})

	return app
}

export default App