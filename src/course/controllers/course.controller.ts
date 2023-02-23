import { Request, Response } from "express";

export const handleGetAll = async (req: Request, res: Response) => {
	//const data = userService.handleGetAllUser()
	res.json({ message: "get all" });
}

export default {
    handleGetAll
}