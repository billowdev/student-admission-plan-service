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
		res.status(400).json({ error: 'Unable to retrieve course' });
	}
};

export const handleCreateCourse = async (req: Request, res: Response) => {
	try {
		const course = req.body;
		const payload = await courseService.createCourse(course);
		res.status(201).json({ msg: "create course successfully", payload });

	} catch (error) {
		console.error(`Error create course `, error);
		res.status(400).json({ error: 'Unable to create course' });
	}
}

export const handleUpdateCourse = async (req: Request, res: Response) => {
	try {
		const course = req.body;
		const id = req.params.id;
		const payload = await courseService.updateCourse(id, course);
		if(payload) res.status(200).json({ msg: "update course successfully", payload });
	} catch (error) {
		res.status(400).json({ error: 'Unable to update course' });
	}

}

export const handleDeleteCourse = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const payload = await courseService.deleteCourse(id);
		if(payload) res.status(200).json({ msg: "delete course successfully", payload });
	} catch (error) {
		res.status(400).json({ error: 'Unable to delete course' });
	}
}

export default {
	handleGetAll,
	handleGetOneCourse,
	handleCreateCourse,
	handleUpdateCourse,
	handleDeleteCourse
}