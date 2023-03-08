import { Request, Response } from "express";

import { CourseParamInterface, CourseQueryInterface } from "../types/course.type";

import courseService from './../services/course.service';

export const handleGetAll = async (req: Request, res: Response) => {
	try {

		const payload = await courseService.getAllCourse(req.query)
		if (!payload)
			return res.status(400).json({
				error: "Failed to retrieve all courses",
			});
		res.status(200).json({
			message: "Retrieved all courses successfully",
			payload
		});
	} catch (error: unknown) {
		res.status(400).json({
			error: `Error retrieving all courses: ${(error as Error).message}`
		})
	}
}


export const handleGetOneCourse = async (req: Request, res: Response) => {
	const { id } = req.params;


	try {
		const payload = await courseService.getOneCourse(id);
		if (!payload) {
			res.status(404).json({ error: 'Course not found' });
			return;
		}

		res.status(200).json({ message: "Retrieved course successfully", payload });
	} catch (error: unknown) {
		console.error(`Error retrieving course ${id}: `, error);
		res.status(400).json({ error: `Error retrieving course ${id}: ${(error as Error).message}` });

	}
};

export const handleGetAllCourseByFaculty = async (req: Request, res: Response) => {
	const { faculty } = req.params;
	try {
		const payload = await courseService.getCourseByFaculty(faculty);

		if (!payload) {
			res.status(404).json({ error: 'Course not found' });
			return;
		}

		res.status(200).json({ message: "Retrieved course by faculty successfully", payload });
	} catch (error: unknown) {
		console.error(`Error retrieving course ${faculty}: `, error);
		res.status(400).json({ error: `Error retrieving course ${faculty}: ${(error as Error).message}` });

	}
};


export const handleCreateCourse = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const payload = await courseService.createCourse(body);

		if (!payload)
			return res.status(400).json({ error: "Failed to create course" });
		res.status(201).json({ message: "Created course successfully", payload });

	} catch (error: unknown) {
		console.error(`Error creating course: `, error);
		res.status(400).json({ error: `Error creating course: ${(error as Error).message}` });

	}
}

export const handleUpdateCourse = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const id = req.params.id;
		const payload = await courseService.updateCourse(id, body);

		if (!payload)
			return res.status(400).json({ error: "Failed to update course" });
		res.status(200).json({ message: "Updated course successfully", payload });
	} catch (error: unknown) {
		res.status(400).json({ error: `Error updating course: ${(error as Error).message}` });

	}

}

export const handleDeleteCourse = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const payload = await courseService.deleteCourse(id);
		if (payload)
			res.status(200).json({ message: "delete course successfully", payload });
		else
			res.status(400).json({ message: "delete course failed" });

	} catch (error) {
		res.status(400).json({ error: 'Unable to delete course' });
	}
}

export default {
	handleGetAll,
	handleGetOneCourse,
	handleCreateCourse,
	handleUpdateCourse,
	handleDeleteCourse,
	handleGetAllCourseByFaculty
}