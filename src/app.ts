import express from "express";
import { json } from 'body-parser';
import userController from './modules/user/controllers/user.controller';
import courseController from "./modules/course/controllers/course.controller";
import extraAdmissionPlanController from "./modules/extra-admission-plan/controllers/extra-admission-plan.controller";

export const App = () =>{

	const app = express()

	app.use(json());
	app.route("/users").get(userController.handleGetAll)
	app.route("/users/login").post(userController.handleLogin)
	app.route("/users/create").post(userController.handleCreateUser)


	app.route("/courses").get(courseController.handleGetAll)
	app.route("/courses/getOne").get(courseController.handleGetOneCourse)
	app.route("/courses/create").post(courseController.handleCreateCourse)
	app.route("/courses/update").patch(courseController.handleUpdateCourse)
	app.route("/courses/delete").delete(courseController.handleDeleteCourse)
	app.route("/extra-admission-plans").get(extraAdmissionPlanController.handleGetAll)

	app.get("/", (req, res) => {
		res.json("HELLO WORLD");
	})

	return app
}

export default App