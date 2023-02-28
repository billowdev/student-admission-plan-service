import { Request, Response } from "express";
import { AdmissionPlanQueryInterface } from "../types/admission-plan.type";
import AdmissionPlanService from './../services/admission-plan.service';

export const handleGetAllAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const payload = await AdmissionPlanService.getAll(req.query)
		res.json({
			message: "get all admission plan successfull",
			payload
		});
	} catch (error) {
		res.status(400).json({
			msg: "something went wrong !"
		})
	}
}

export const handleGetOneAdmissionPlan = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "get one successfull" });
}

export const handleCreateAdmissionPlan = async (req: Request, res: Response) => {
	try {
		//const user = await AdmissionPlanService.createAdmissionPlan({username, password});
		res.status(201).json({ AdmissionPlan: "AdmissionPlan" });

	} catch (error) {
		res.status(400).json({ error: 'can not create AdmissionPlan' });
	}
}

export const handleUpdateAdmissionPlan = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "patch Update successfull" });
}

export const handleDeleteAdmissionPlan = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "delete successfull" });
}
export default {
	handleGetAllAdmissionPlan,
	handleGetOneAdmissionPlan,
	handleCreateAdmissionPlan,
	handleUpdateAdmissionPlan,
	handleDeleteAdmissionPlan
}