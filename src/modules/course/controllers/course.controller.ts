import { Request, Response } from "express";
import courseService from '../services/course.service';

export const handleGetAll = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "get all successfull" });
}

export const handleGetOneCourse = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "get one successfull" });
}

export const handleCreateCourse = async (req: Request, res: Response) => {
	try {
		//const user = await courseService.createCourse({username, password});
		res.status(201).json({ Course:"Course" });

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