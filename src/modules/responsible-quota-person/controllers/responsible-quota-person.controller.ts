import { Request, Response } from "express";
import ResponsibleQuotaPersonService from './../services/responsible-quota-person.service';

export const handleGetAllResponsibleQuotaPerson = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "get all successfull" });
}

export const handleGetOneResponsibleQuotaPerson = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "get one successfull" });
}

export const handleCreateResponsibleQuotaPerson = async (req: Request, res: Response) => {
	try {
		//const user = await ResponsibleQuotaPersonService.createResponsibleQuotaPerson({username, password});
		res.status(201).json({ ResponsibleQuotaPerson:"ResponsibleQuotaPerson" });

	} catch (error) {
		res.status(400).json({ error: 'can not create ResponsibleQuotaPerson' });
	}
}

export const handleUpdateResponsibleQuotaPerson = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "patch Update successfull" });
}

export const handleDeleteResponsibleQuotaPerson = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "delete successfull" });
}
export default {
    handleGetAllResponsibleQuotaPerson,
	handleGetOneResponsibleQuotaPerson,
	handleCreateResponsibleQuotaPerson,
	handleUpdateResponsibleQuotaPerson,
	handleDeleteResponsibleQuotaPerson
}