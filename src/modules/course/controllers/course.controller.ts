import { Request, Response } from "express";
import { CourseParamInterface, CourseQueryInterface } from "../types/course.type";
import courseService from './../services/course.service';

export const handleGetAll = async (req: Request<{}, {}, {}, CourseQueryInterface>, res: Response) => {
	try {
		const query: CourseQueryInterface = {
			major: req.query.major,
			degree: req.query.degree,
			qualification: req.query.qualification,
			faculty: req.query.faculty
		}

		const payload = await courseService.handleGetAllCourse(query)
		res.json({
			message: "get all successfull",
			payload
		});
	} catch (error) {
		console.error(error)
		res.status(400).json({
			msg: "something went wrong !"
		})
	}
}

export const handleGetOneCourse = async (req: Request<{}, {}, CourseParamInterface, {}>, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "get one successfull" });
}

export const handleCreateCourse = async (req: Request, res: Response) => {
	try {
		//const user = await courseService.createCourse({username, password});
		res.status(201).json({ Course: "Course" });

	} catch (error) {
		res.status(400).json({ error: 'can not create Course' });
	}
}

export const handleUpdateCourse = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "patch Update successfull" });
}

export const handleDeleteCourse = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "delete successfull" });
}

export default {
	handleGetAll,
	handleGetOneCourse,
	handleCreateCourse,
	handleUpdateCourse,
	handleDeleteCourse
}