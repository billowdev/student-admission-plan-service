
import { Request, Response, Express } from 'express';
import userService from './../services/user.service';
import { AuthError, LoginError, UserAlreadyExistsError, UserNotFoundException } from './../../../common/exceptions/user.exception';
import { UserIdentifier, UserQueryInterface } from '../types/user.types';
import { FetchError } from '../../../common/exceptions/app.exception';

export const handleCreateUser = async (req: Request, res: Response): Promise<void> => {
	try {
		const user = await userService.createUser(req.body);
		res.status(201).json(user);
	} catch (error) {
		if (error instanceof UserAlreadyExistsError) {
			res.status(400).json({ message: error.message });
		} else {
			console.error(error);
			res.status(500).json({ message: 'Internal server error' });
		}
	}
};


export const handleLogin = async (req: Request, res: Response): Promise<void> => {
	const { username, password } = req.body;
	try {
		const { token } = await userService.login(username, password);
		res.status(200).json({ msg: "login was successfully", token });
	} catch (error) {
		console.error(error);

		if (error instanceof AuthError) {
			res.status(401).json({ message: error.message });
		} else if (error instanceof LoginError) {
			res.status(500).json({ message: error.message });
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


export const handleGetAllUsers = async (req: Request, res: Response): Promise<void> => {
	const query = req.query as UserQueryInterface;
  
	// Validate input
	if (typeof query !== 'object' || query === null || Object.keys(query).length === 0) {
	  res.status(400).json({ message: 'Invalid query parameters' });
	  return;
	}
  
	try {
	  const users = await userService.getAllUsers(query);
	  res.status(200).json({
		msg: 'Successfully retrieved all users',
		payload: users,
	  });
	} catch (error) {
	  console.error(error);
  
	  if (error instanceof FetchError) {
		res.status(error.status).json({ message: error.message });
	  } else {
		res.status(500).json({ message: "something went wrong!" });
	  }
	}
  };
  


export const handleGetOneUsers = async (req: Request, res: Response): Promise<void> => {
	try {
		const id = req.params.id
		const users = await userService.getOneUser(id);
		res.status(200).json(users);
	} catch (error) {
		console.error(error);

		if (error instanceof FetchError) {
			res.status(error.status).json({ message: error.message });
		} else {
			res.status(500).json({ message: 'Internal server error' });
		}
	}
};



export default {
	handleLogin,
	handleGetAllUsers,
	handleCreateUser,
	handleDeleteUser,
	handleUpdateUser

}