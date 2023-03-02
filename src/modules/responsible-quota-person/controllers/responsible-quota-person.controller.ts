import { Request, Response } from "express";
import responsibleQuotaPersonService from './../services/responsible-quota-person.service';
import { ResponsibleQuotaPersonQueryInterface } from './../types/responsible-quota-person.types';

export const handleGetAllResponsibleQuotaPerson = async (req: Request, res: Response) => {
	const data = responsibleQuotaPersonService.getAllResponsibleQuotaPersons(req.query)
	res.json({ message: "get all successfull" });
}

export const handleGetOneResponsibleQuotaPerson = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const responsibleQuotaPerson = responsibleQuotaPersonService.getOneRQP(id)
		if (!responsibleQuotaPerson) {
			res.status(404).json({ message: 'Responsible quota person not found' });
			return;
		}
		res.status(200).json(responsibleQuotaPerson);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Unable to fetch responsible quota person' });
	}
}

export const handleCreateResponsibleQuotaPerson = async (req: Request, res: Response) => {
	try {
		const { year, name, surname, agency, phone, quota } = req.body;

		const newResponsibleQuotaPerson = await responsibleQuotaPersonService.createRQP({
			year,
			name,
			surname,
			agency,
			phone,
			quota,
		});

		res.status(201).json({
			msg:"create responsible quota person was successfully",
			payload: newResponsibleQuotaPerson
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Unable to create responsible quota person' });
	}
}

export const handleUpdateResponsibleQuotaPerson = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const responsibleQuotaPerson = responsibleQuotaPersonService.updateRQP(id, req.body)
		// const responsibleQuotaPerson = await ResponsibleQuotaPerson.findByPk(id);

		if (!responsibleQuotaPerson) {
			res.status(404).json({ message: 'Responsible quota person not found' });
			return;
		}

		res.status(200).json(responsibleQuotaPerson);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Unable to fetch responsible quota person' });
	}
	res.json({ message: "patch Update successfull" });
}

export const handleDeleteResponsibleQuotaPerson = async (req: Request, res: Response) => {
	const data = responsibleQuotaPersonService.deleteRQP(req.params.id)
	res.json({ message: "delete successfull" });
}
export default {
	handleGetAllResponsibleQuotaPerson,
	handleGetOneResponsibleQuotaPerson,
	handleCreateResponsibleQuotaPerson,
	handleUpdateResponsibleQuotaPerson,
	handleDeleteResponsibleQuotaPerson
}