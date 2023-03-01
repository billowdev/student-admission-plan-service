import {Request, Response} from "express"
import extraAdmissionPlanService from "../services/extra-admission-plan.service";
import { ExtraAdminssionPlanQueryInterface } from "../types/extra-admission-plan.types";

export const handleGetAllExtraAdmissionPlan = async (req: Request<{}, {}, {}, ExtraAdminssionPlanQueryInterface>, res: Response) => {
    try {
		const query: ExtraAdminssionPlanQueryInterface = {
			qty: req.query.qty,
			year: req.query.year,
			courseId: req.query.courseId,
			keyword: req.query.keyword
		}

		const payload = await extraAdmissionPlanService.getAllExtraAdmissionPlan(query)
		res.json({
			message: "get all extra admission plan was successfully",
			payload
		});
	} catch (error) {
		res.status(400).json({
			msg: "something went wrong !"
		})
	}
} 
export default { 
    handleGetAllExtraAdmissionPlan

}