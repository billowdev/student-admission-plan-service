import { Request, Response } from "express"
import extraAdmissionPlanService from "../services/extra-admission-plan.service";
import { ExtraAdmissionPlanQueryInterface } from "../types/extra-admission-plan.types";
import Sequelize from 'sequelize';

export const handleGetAllExtraAdmissionPlan = async (
	req: Request<{}, {}, {}, ExtraAdmissionPlanQueryInterface>,
	res: Response
  ) => {
	try {
	  const { qty, year, courseId, keyword } = req.query;
	  const query: ExtraAdmissionPlanQueryInterface = { qty, year, courseId, keyword };
	  const payload = await extraAdmissionPlanService.getAllExtraAdmissionPlan(query);
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
            msg: "failed to get extra admission plan"
        });
    }
}


export const handleCreateExtraAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const payload = await extraAdmissionPlanService.createExtraAdmissionPlan(body);
		if (!payload) {
			return res.status(400).json({ msg: "create extra admission plan was failed", payload });
		}
		return res.status(201).json({ msg: "create extra admission plan was successfully", payload });
	} catch (error) {
		console.error(`Error creating extra admission plan:`, error);
		return res.status(400).json({ error: 'Unable to create extra admission plan' });
	}
};



export const handleUpdateExtraAdmissionPlan = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { ...dto } = req.body;
		const payload = await extraAdmissionPlanService.updateExtraAdmissionPlan(id, dto);
		if (!payload) {
			return res.status(400).json({ msg: "update extra admission plan failed" });
		}
		return res.status(200).json({ msg: "update extra admission plan successfully", payload });
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
	handleDeleteExtraAdmissionPlan
}