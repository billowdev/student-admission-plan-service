import { Request, Response } from "express";
import { Sequelize } from "sequelize";
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


export const handleGetOneAdmissionPlan = async (req: Request, res: Response): Promise<void> => {
	const id = (req.params as { id: string }).id;

	try {
		const payload = await admissionPlanService.getOneAdmissionPlan(id);
		if (!payload) {
			res.status(404).json({ error: 'Admission plan not found' });
			return;
		}
		res.json({ message: "Admission plan retrieved successfully", payload });
	} catch (error) {
		console.error(`Error retrieving admission plan ${id}: `, error);
		res.status(400).json({ error: 'Unable to retrieve admission plan' });

	}
}

export const handleGetAllAdmissionPlanByCourseId = async (req: Request, res: Response): Promise<void> => {
	const id = (req.params as { id: string }).id;

	try {
		const payload = await admissionPlanService.getAllAdmissionPlanByCourseId(id);
		if (!payload) {
			res.status(404).json({ error: 'Admission plan not found' });
			return;
		}
		res.json({ message: "Admission plan retrieved successfully", payload });
	} catch (error) {
		console.error(`Error retrieving admission plan ${id}: `, error);
		res.status(400).json({ error: 'Unable to retrieve admission plan' });

	}
}

export const handleGetAllAdmissionPlanByFaculty = async (req: Request, res: Response): Promise<void> => {
	const faculty = (req.params as { faculty: string }).faculty;
	const query = req.query

	try {
		const payload = await admissionPlanService.getAllAdmissionPlanByFaculty(faculty, query);
		if (!payload) {
			res.status(404).json({ error: 'Admission plan not found' });
			return;
		}
		res.status(200).json({ message: "Admission plan retrieved successfully", payload });
	} catch (error) {
		console.error(`Error retrieving admission plan ${faculty}: `, error);
		res.status(400).json({ error: 'Unable to retrieve admission plan' });

	}
}

export const handleGetAllAdmissionPlanGroupByFaculty = async (
	req: Request,
	res: Response
) => {
	const query = req.query
	try {
		const payload = await admissionPlanService.getAllAdmissionPlanGroupByFaculty(query);
		res.json({
			message: "get all admission plan group by faculty was successful",
			payload,
		});
	} catch (error: any) {
		res.status(400).json({ message: "can not get all admission plan that group by faculty" });

	}
};

export const handleGetYearListAdmissionPlan = async (req: Request, res: Response): Promise<void> => {
	try {
		const payload = await admissionPlanService.getYearlistAdmissionPlan();
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

export const handleGetFacultyListAdmissionPlan = async (req: Request, res: Response): Promise<void> => {
	try {
		const payload = await admissionPlanService.getFacultylistAdmissionPlan();
		if (!payload) {
			res.status(404).json({ error: 'Faculty list  admission plan not found' });
			return;
		}
		res.status(200).json({ message: "Faculty list  admission plan retrieved successfully", payload });
	} catch (error) {
		console.error(`Error retrieving faculty list of admission plan: `, error);
		res.status(400).json({ error: 'Unable to retrieve admission plan' });

	}
}


export const handleCreateAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const { year, courseId } = req.body;
		const exists = await admissionPlanService.checkIsYearExist(year, courseId);
		if (exists) {
			return res.status(409).json({ message: 'duplicated' });
		}
		const admissionPlanDto = req.body;
		const createdAdmissionPlan = await admissionPlanService.createAdmissionPlan(admissionPlanDto);

		return res.status(201).json({ message: 'Admission plan created successfully', payload: createdAdmissionPlan });
	} catch (error) {
		return res.status(400).json({ error: 'Unable to create admission plan' });
	}
};


export const handleUpdateAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const id = req.params.id;

		const payload = await admissionPlanService.updateAdmissionPlan(id, body);
		if (payload) {
			res.status(200).json({ message: "update admission plan was successfully", payload });
		} else {
			res.status(404).json({ error: 'Admission plan not found' });
		}
	} catch (error) {
		console.error(`Error updating admission plan: `, error);
		res.status(400).json({ error: 'Unable to update admission plan' });
	}

}


export const handleDeleteAdmissionPlan = async (req: Request, res: Response) => {

	const id = req.params.id;
	try {
		const payload = await admissionPlanService.deleteAdmissionPlan(id);
		if (payload) {
			res.status(200).json({ message: "delete admission plan was successful" });
		} else {
			res.status(404).json({ error: 'Admission plan not found' });
		}
	} catch (error) {
		console.error(`Error deleting admission plan ${id}: `, error);

		res.status(400).json({ error: 'Unable to delete admission plan' });
	}
}


export default {
	handleGetAllAdmissionPlan,
	handleGetOneAdmissionPlan,
	handleCreateAdmissionPlan,
	handleUpdateAdmissionPlan,
	handleDeleteAdmissionPlan,
	handleGetAllAdmissionPlanByFaculty,
	handleGetAllAdmissionPlanByCourseId,
	handleGetYearListAdmissionPlan,
	handleGetFacultyListAdmissionPlan,
	handleGetAllAdmissionPlanGroupByFaculty
}