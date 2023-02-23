import express from "express";
import { json } from 'body-parser';
import userController from './user/controllers/user.controller';

export const App = () =>{

	const app = express()

	app.use(json());
	app.route("/users").get(userController.getAllUsers)
	app.route("/users/login").post(userController.handleLogin)
	app.route("/users/create").post(userController.handleCreateUser)
		

	app.get("/", (req, res) => {
		res.json("HELLO WORLD");
	})

	return app
}

export default App