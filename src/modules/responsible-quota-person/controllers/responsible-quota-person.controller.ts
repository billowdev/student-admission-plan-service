import { Request, Response } from "express";
import responsibleQuotaPersonService from './../services/responsible-quota-person.service';

export const handleGetAllRQP = async (req: Request, res: Response): Promise<void> => {
	try {
		const query = req.query;
		const responsibleQuotaPersons = await responsibleQuotaPersonService.getAllRQP(query)
		if (responsibleQuotaPersons) {
			res.status(200).json({
				message: "get all responsible person was successfully",
				payload: responsibleQuotaPersons
			});
		} else {
			res.status(404).json({ message: 'No responsible quota persons found' });
		}
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: 'Unable to fetch responsible quota persons' });
	}
};

export const handleGetOneRQP = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const responsibleQuotaPerson = await responsibleQuotaPersonService.getOneRQP(id)
		if (responsibleQuotaPerson) {
			res.status(200).json({
				message: "get one rqp successfully",
				payload: responsibleQuotaPerson,
			});
		} else {
			res.status(404).json({ message: 'Responsible quota person not found' });
		}
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: 'Unable to fetch responsible quota person' });
	}
}

export const handleCreateRQP = async (req: Request, res: Response) => {
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
			message: "create responsible quota person was successfully",
			payload: newResponsibleQuotaPerson
		});
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: 'Unable to create responsible quota person' });
	}
}

export const handleUpdateRQP = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const responsibleQuotaPerson = responsibleQuotaPersonService.updateRQP(id, req.body)
		// if (!responsibleQuotaPerson) {
		// 	res.status(404).json({ message: 'Responsible quota person not found' });
		// 	return;
		// }
		res.status(200).json(responsibleQuotaPerson);

	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Unable to fetch responsible quota person' });
	}
}

export const handleDeleteRQP = async (req: Request, res: Response) => {
	try {
		await responsibleQuotaPersonService.deleteRQP(req.params.id);
		res.status(200).json({ message: "Delete successful" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Unable to delete responsible quota person" });
	}
}

export default {
	handleGetAllRQP,
	handleGetOneRQP,
	handleCreateRQP,
	handleUpdateRQP,
	handleDeleteRQP
}