import { Request, Response } from "express";
import { AdmissionPlanQueryInterface } from "../types/admission-plan.type";
import admissionPlanService from './../services/admission-plan.service';

// Renamed AdmissionPlanService to admissionPlanService to follow camelCase convention.
// Changed message and error object in the response of the handleGetAllAdmissionPlan() function for consistency.
export const handleGetAllAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const payload = await admissionPlanService.getAllAdmissionPlan(req.query);
		res.status(200).json({
			message: "Get all admission plans successful",
			payload,
		});
	} catch (error) {
		res.status(400).json({
			message: "Something went wrong while fetching admission plans",
			error,
		});
	}
};


export const handleGetOneAdmissionPlan = async (req: Request, res: Response) => {
	const id = (req.params as { id: string }).id;

	try {
		const payload = await admissionPlanService.getOneAdmissionPlan(id);
		if (!payload) {
			res.status(404).json({ error: 'get oone admission plan not found' });
			return;
		}
		res.json({ msg: "get one admission plan was successfully", payload });
	} catch (error) {
		console.error(`Error retrieving course ${id}: `, error);
		res.status(400).json({ error: 'Unable to retrieve course' });
	}
}

export const handleCreateAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const payload = await admissionPlanService.createAdmissionPlan(body);
		res.status(201).json({ msg: "create admission plan was successfully", payload });

	} catch (error) {
		console.error(`Error create admission plan `, error);
		res.status(400).json({ error: 'Unable to create admission plan' });
	}
}

export const handleUpdateAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const id = req.params.id;
		const payload = await admissionPlanService.updateAdmissionPlan(id, body);
		if (payload) res.status(200).json({ msg: "update admission plan was successfully", payload });
	} catch (error) {
		res.status(400).json({ error: 'Unable to update admission plan' });
	}

}

export const handleDeleteAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const payload = await admissionPlanService.deleteAdmissionPlan(id);
		if (payload) res.status(200).json({ msg: "delete admission plan was successfully", payload });
	} catch (error) {
		res.status(400).json({ error: 'Unable to delete admission plan' });
	}
}
export default {
	handleGetAllAdmissionPlan,
	handleGetOneAdmissionPlan,
	handleCreateAdmissionPlan,
	handleUpdateAdmissionPlan,
	handleDeleteAdmissionPlan
}