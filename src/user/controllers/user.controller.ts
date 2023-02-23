
import { Request, Response, Express } from 'express';
import userService from './../services/user.service';


export const getAllUsers = async (req: Request, res: Response) => {
	const data = userService.handleGetAllUser()
	res.json({ message: "get all", data });
}

export const handleLogin = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	const response = await userService.login({ username, password })
	res.json({ message: 'login success', response })
}

export const handleCreateUser = async (req: Request, res: Response) => {
	try {
		const { username, password } = req.body;
		const user = await userService.createUser({username, password});
		res.status(201).json({ user });
	} catch (error) {
		res.status(400).json({ error: 'can not create user' });
	}
}


export default {
	getAllUsers,
	handleLogin,
	handleCreateUser
}