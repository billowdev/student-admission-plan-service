
import { Request, Response, Express } from 'express';
import { UserAttributes } from '../types/user.types';
import userService from './../services/user.service';
import { hashPassword, verifyPassword } from './../../../common/utils/password-hasher';
import { AuthError, UserNotFoundException } from './../../../common/exceptions/user.exception';
import { handleCreateAdmissionPlan } from './../../admission-plan/controllers/admission-plan.controller';

export const handleCreateUser = async (req: Request, res: Response): Promise<void> => {
	const { username, password } = req.body;

	try {
		const user = await userService.createUser({ username, password });
		res.status(201).json(user);
	} catch (error) {
		console.error(error);

		res.status(500).json({ message: 'Internal server error' });
	}
};


export const handleLogin = async (req: Request, res: Response): Promise<void> => {
	const { username, password } = req.body;

	try {
		const { token } = await userService.login(username, password);
		res.status(200).json({ token });
	} catch (error) {
		console.error(error);

		if (error instanceof AuthError) {
			res.status(401).json({ message: error.message });
		} else {
			res.status(500).json({ message: 'Internal server error' });
		}
	}
};

export const handleDeleteUser = async (req: Request, res: Response): Promise<void> => {
	const { id } = req.params;

	try {
		await userService.deleteUser(id);
		res.status(200).json({ message: `User with id ${id} has been deleted successfully` });
	} catch (error) {
		console.error(error);

		if (error instanceof UserNotFoundException) {
			res.status(404).json({ message: error.message });
		} else {
			res.status(500).json({ message: 'Internal server error' });
		}
	}
};

export const handleUpdateUser = async (req: Request, res: Response): Promise<void> => {
	const { id } = req.params;
	const user = req.body;

	try {
		const updatedUser = await userService.updateUser(id, user);
		res.status(200).json(updatedUser);
	} catch (error) {
		console.error(error);

		if (error instanceof UserNotFoundException) {
			res.status(404).json({ message: error.message });
		} else {
			res.status(500).json({ message: 'Internal server error' });
		}
	}
};



export default {
	handleLogin,
	handleCreateUser,
	handleDeleteUser,
	handleUpdateUser

}