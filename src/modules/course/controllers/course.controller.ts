import { Request, Response } from "express";
import { CourseAttributes, CourseParamInterface, CourseQueryInterface } from "../types/course.type";
import courseService from './../services/course.service';

export const handleGetAll = async (req: Request<{}, {}, {}, CourseQueryInterface>, res: Response) => {
	try {
		const query: CourseQueryInterface = {
			major: req.query.major,
			degree: req.query.degree,
			qualification: req.query.qualification,
			faculty: req.query.faculty
		}

		const payload = await courseService.getAllCourse(query)
		res.json({
			message: "get all successfull",
			payload
		});
	} catch (error) {
		res.status(400).json({
			msg: "something went wrong !"
		})
	}
}

export const handleGetOneCourse = async (req: Request<{}, {}, CourseParamInterface, {}>, res: Response) => {
	// const { id } = req.params?.id;
	const id = (req.params as { id: string }).id;

	try {
		const course = await courseService.getOneCourse(id);
		if (!course) {
			res.status(404).json({ error: 'Course not found' });
			return;
		}
		res.json({ course });
	} catch (error) {
		console.error(`Error retrieving course ${id}: `, error);
		res.status(500).json({ error: 'Unable to retrieve course' });
	}
};

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