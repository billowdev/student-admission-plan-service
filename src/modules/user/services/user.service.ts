
import { createAuthError, LoginError, UserCreationError, UserExistsError, UserNotFoundException } from '../../../common/exceptions/user.exception';
import { hashPassword, verifyPassword } from '../../../common/utils/password-hasher';
import db from "../../../database/models"
import { LoginResponse, UserAttributes, UserQueryInterface } from '../types/user.types';
import { Op } from 'sequelize';
import { FetchError } from '../../../common/exceptions/app.exception';
import { createJwtToken } from '../../../middlewares/jwt.middleware.';


const User = db.User


export const login = async (identifier: string, password: string): Promise<LoginResponse> => {
	try {
		const user = await User.findOne({
			where: {
				[Op.or]: [
					{ username: { [Op.eq]: identifier } },
					{ email: { [Op.eq]: identifier } },
				],
			}, raw: true
		});
		if (!user) {
			const error = createAuthError('Invalid username or password');
			throw error;
		}

		const passwordMatch = await verifyPassword(password, user.password);

		if (!passwordMatch) {
			const error = createAuthError('Invalid username or password');
			throw error;
		}

		const token: string = createJwtToken({ id: user.id, role: user.role, name: user.name })
		return { token };
	} catch (error) {
		throw new LoginError('Unable to log in');
	}
};

export const createUser = async (user: UserAttributes): Promise<UserAttributes> => {
	try {
		const { username, email, password } = user;

		// Check if a user with the given email or username already exists
		const existingUser = await User.findOne({
			where: {
				[Op.or]: [
					{ username: { [Op.eq]: username } },
					{ email: { [Op.eq]: email } },
				],
			},
		});

		if (existingUser) {
			throw new UserExistsError('Username or email already exists');
		}

		const hashedPassword = await hashPassword(password);
		const response = await User.create({
			username,
			email,
			password: hashedPassword,
		});

		return response;
	} catch (error) {
		console.error(error);
		throw new UserCreationError('Failed to create user');
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
			return await User.findAll({
				attributes: {
					exclude: ['password']
				}
			});
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
			attribues: {
				exclude: ['password']
			},
			raw: true,
		});
		return response;
	} catch (error) {
		throw new FetchError("Unable to fetch users", 500);
	}
};

export const getOneUser = async (id: string): Promise<UserAttributes> => {
	try {
		const response = await User.findByPk(id, {
			attribues: {
				exclude: ['password']
			},
			raw: true
		})
		return response
	} catch (error) {
		throw new FetchError('Unable to get user', 500)
	}
}


export default {
	login,
	createUser,
	deleteUser,
	updateUser,
	getAllUsers,
	getOneUser
}