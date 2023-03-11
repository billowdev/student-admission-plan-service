import { Request, Response } from "express"
import extraAdmissionPlanService from "../services/extra-admission-plan.service";
import { ExtraAdmissionPlanQueryInterface } from "../types/extra-admission-plan.types";
import Sequelize from 'sequelize';

export const handleGetAllExtraAdmissionPlan = async (
	req: Request,
	res: Response
) => {
	try {
		const { qty, year, keyword } = req.query;
		const payload = await extraAdmissionPlanService.getAllExtraAdmissionPlan({ qty, year, keyword });
		res.json({
			message: "get all extra admission plan was successful",
			payload,
		});
	} catch (error: any) {
		if (error instanceof Sequelize.ValidationError) {
			res.status(400).json({ message: error.message });
		} else {
			res.status(500).json({ message: "failed to get extra admission plans" });
		}
	}
};

export const handleGetAllExtraAdmissionPlanGroupByFaculty = async (
	req: Request,
	res: Response
) => {
	try {
		const { qty, year, keyword } = req.query;
		const payload = await extraAdmissionPlanService.getAllExtraAdmissionPlanGroupByFaculty({ qty, year, keyword });
		res.json({
			message: "get all extra admission plan group by faculty was successful",
			payload,
		});
	} catch (error: any) {
		if (error instanceof Sequelize.ValidationError) {
			res.status(400).json({ message: error.message });
		} else {
			res.status(500).json({ message: "failed to get extra admission plans group by faculty" });
		}
	}
};

export const handleGetAllExtraAdmissionPlanByFaculty = async (req: Request, res: Response): Promise<void> => {
	const faculty = (req.params as { faculty: string }).faculty;
	const query = req.query

	try {
		const payload = await extraAdmissionPlanService.getAllExtraAdmissionPlanByFaculty(faculty, query);
		if (!payload) {
			res.status(404).json({ error: 'extra admission plan not found' });
			return;
		}
		res.status(200).json({ message: "extra admission plan retrieved successfully", payload });
	} catch (error) {
		console.error(`Error retrieving extra admission plan ${faculty}: `, error);
		res.status(400).json({ error: 'Unable to retrieve extra admission plan' });

	}
}

export const handleGetOneExtraAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const { id } = req.params
		const payload = await extraAdmissionPlanService.getOneExtraAdmissionPlan(id)
		if (!payload) {
			res.status(404).json({
				message: "extra admission plan not found",
			});
			return;
		}
		let headersSent = false;
		if (!headersSent) {
			res.status(200).json({
				message: "get one extra admission plan was successfully",
				payload
			});
			headersSent = true;
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "failed to get extra admission plan"
		});
	}
}


export const handleCreateExtraAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const payload = await extraAdmissionPlanService.createExtraAdmissionPlan(body);
		if (!payload) {
			return res.status(400).json({ message: "create extra admission plan was failed", payload });
		}
		return res.status(201).json({ message: "create extra admission plan was successfully", payload });
	} catch (error) {
		console.error(`Error creating extra admission plan:`, error);
		return res.status(400).json({ error: 'Unable to create extra admission plan' });
	}
};



export const handleGetYearListExtraAdmissionPlan = async (req: Request, res: Response): Promise<void> => {
	try {
		const payload = await extraAdmissionPlanService.getYearlistExtraAdmissionPlan();
		if (!payload) {
			res.status(404).json({ error: 'Admission plan not found' });
			return;
		}
		res.status(200).json({ message: "Admission plan retrieved successfully", payload });
	} catch (error) {
		console.error(`Error retrieving year list of admission plan: `, error);
		res.status(400).json({ error: 'Unable to retrieve admission plan' });

	}
}

export const handleGetFacultyListExtraAdmissionPlan = async (req: Request, res: Response): Promise<void> => {
	try {
		const payload = await extraAdmissionPlanService.getFacultylistExtraAdmissionPlan();
		if (!payload) {
			res.status(404).json({ error: 'Faculty list extra admission plan not found' });
			return;
		}
		res.status(200).json({ message: "Faculty list extra admission plan retrieved successfully", payload });
	} catch (error) {
		console.error(`Error retrieving faculty list of extra admission plan: `, error);
		res.status(400).json({ error: 'Unable to retrieve extra admission plan' });

	}
}

export const handleUpdateExtraAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { ...dto } = req.body;
		const payload = await extraAdmissionPlanService.updateExtraAdmissionPlan(id, dto);
		if (!payload) {
			return res.status(400).json({ message: "update extra admission plan failed" });
		}
		return res.status(200).json({ message: "update extra admission plan successfully", payload });
	} catch (error) {
		console.error(`Error updating extra admission plan`, error);
		return res.status(500).json({ error: 'Internal server error' });
	}
}



export const handleDeleteExtraAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const result = await extraAdmissionPlanService.deleteExtraAdmissionPlan(id);
		if (result) {
			res.status(204).end();
		} else {
			res.status(400).json({ error: 'Delete extra admission plan failed' });
		}
	} catch (error) {
		console.error(`Error deleting extra admission plan: ${error}`);
		res.status(500).json({ error: 'Unable to delete extra admission plan' });
	}
};


export default {
	handleGetAllExtraAdmissionPlan,
	handleGetOneExtraAdmissionPlan,
	handleCreateExtraAdmissionPlan,
	handleUpdateExtraAdmissionPlan,
	handleDeleteExtraAdmissionPlan,
	handleGetAllExtraAdmissionPlanByFaculty,
	handleGetYearListExtraAdmissionPlan,
	handleGetAllExtraAdmissionPlanGroupByFaculty,
	handleGetFacultyListExtraAdmissionPlan
}