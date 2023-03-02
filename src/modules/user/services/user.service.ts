import argon2 from 'argon2';
import { createAuthError, UserNotFoundException } from '../../../common/exceptions/user.exception';
import { hashPassword, verifyPassword } from '../../../common/utils/password-hasher';
import db from "../../../database/models"
import { LoginResponse, UserAttributes, UserQueryInterface } from '../types/user.types';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import { FetchError } from '../../../common/exceptions/app.exception';

const User = db.User

export type UserLoginType = {
	username: string,
	password: string
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
	const user = await User.findOne({ where: { username } });

	if (!user) {
		const error = createAuthError('Invalid username or password');
		throw error;
	}

	const passwordMatch = await verifyPassword(password, user.password);

	if (!passwordMatch) {
		const error = createAuthError('Invalid username or password');
		throw error;
	}

	const token = jwt.sign(
		{
			id: user.id,
			role: user.role,
		},
		process.env.JWT_SECRET as string,
		{
			expiresIn: '1h',
		},
	);

	return { token };
};

export const createUser = async (user: any): Promise<any> => {
	try {
	  const hashedPassword = await hashPassword(user.password);
	  const response = await User.create({
		username: user.username,
		password: hashedPassword,
	  });
  
	  return response;
	} catch (error) {
	  console.error(error);
	  throw new Error('Failed to create user');
	}
  };
  
export const updateUser = async (id: string, user: UserAttributes): Promise<UserAttributes> => {
	try {
		const existingUser = await User.findOne({ where: { id } });

		if (!existingUser) {
			throw new UserNotFoundException(`User with id ${id} not found`);
		}

		const [updatedRowsCount] = await User.update(user, { where: { id } });

		if (updatedRowsCount !== 1) {
			throw new Error(`Failed to update user with id ${id}`);
		}

		const updatedUser = await User.findByPk(id);
		return updatedUser.toJSON() as UserAttributes;
	} catch (error) {
		throw error;
	}
};


export const deleteUser = async (id: string): Promise<void> => {
	const user = await User.findOne({ where: { id } });

	if (!user) {
		throw new UserNotFoundException(`User with id ${id} not found`);
	}
	await User.destroy({ where: { id } });
};

export const getAllUsers = async (query: UserQueryInterface): Promise<UserAttributes[]> => {
	try {
	  if (Object.keys(query).length === 0) {
		return await User.findAll();
	  }
	  const { email, username, name, surname, phone, role, faculty } = query;
	  const response = await User.findAll({
		where: {
		  [Op.and]: [
			email && { email: { [Op.iLike]: `%${email}%` } },
			username && { username: { [Op.iLike]: `%${username}%` } },
			name && { name: { [Op.iLike]: `%${name}%` } },
			surname && { surname: { [Op.iLike]: `%${surname}%` } },
			phone && { phone: { [Op.iLike]: `%${phone}%` } },
			role && { role: { [Op.eq]: role } },
			faculty && { faculty: { [Op.iLike]: `%${faculty}%` } },
		  ].filter(Boolean),
		},
		raw: true,
	  });
	  return response;
	} catch (error) {
		throw new FetchError("Unable to fetch users", 500);
	}
};


export default {
	login,
	createUser,
	deleteUser,
	updateUser
}