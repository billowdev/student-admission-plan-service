
import { createAuthError, LoginError, UserCreationError, UserExistsError, UserNotFoundException } from '../../../common/exceptions/user.exception';
import { hashPassword, verifyPassword } from '../../../common/utils/password-hasher';
import db from "../../../database/models"
import { LoginResponse, UserAttributes, UserQueryInterface } from '../types/user.types';
import sequelize, { Op } from 'sequelize';
import { FetchError } from '../../../common/exceptions/app.exception';
import { createJwtToken } from '../../../middlewares/jwt.middleware.';
import { isAllValuesUndefined } from '../../../common/utils';
import { JWT_SECRET, JWT_EXPRIES } from '../../../common/constants/common.constants';
import jwt from 'jsonwebtoken';


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
		// const token = jwt.sign({ id: user.id, role: user.role, name: user.name }, "test", { expiresIn: '1h' });
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
			...user
		}, { password: hashedPassword });

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

		const updatedUser = await User.findByPk(id, {
			attribute: {
				exclude: ['password']
			}
		});
		delete updatedUser['dataValues']['password']
		return updatedUser
	} catch (error) {
		throw error;
	}
};


export const deleteUser = async (id: string): Promise<void> => {
	try {
		const user = await User.findOne({ where: { id } });

		if (!user) {
			throw new UserNotFoundException(`User with id ${id} not found`);
		}
		await User.destroy({ where: { id } });
	} catch (error) {
		throw new Error();
	}
};

export const getAllUsers = async (query: any): Promise<UserAttributes[]> => {
	try {
		let whereClause = {};
		const searchableFields = [
			"email",
			"username",
			"name",
			"surname",
			"phone",
			"role",
			"faculty",
		];

		if (!isAllValuesUndefined(query)) {
			whereClause = {
				[Op.or]: searchableFields.map((field) => ({
					[field]: {
						[Op.like]: `%${query[field]}%`,
					},
				})),

			};
		};
		if (query.keyword) {
			whereClause = {
				...whereClause,
				[Op.or]: [
					...searchableFields.map((field) => sequelize.where(sequelize.fn("LOWER", sequelize.col(field)), "LIKE", `%${query.keyword}%`)),
				],
			};
		}

		const response = await User.findAll({
			where: whereClause,
			attributes: {
				exclude: ['password']
			}
		});

		return response;
	} catch (error) {
		throw new FetchError("Unable to fetch users", 500);
	}
}


export const getOneUser = async (id: string): Promise<UserAttributes> => {
	try {
		const response = await User.findByPk(id, {
			attribues: {
				exclude: ['password']
			}
		})
		delete response['dataValues']['password']
		return response
	} catch (error) {
		throw new FetchError('Unable to get user', 400)
	}
}

export const getAllUser = async (query: any): Promise<UserAttributes[]> => {
	try {
		if (isAllValuesUndefined(query)) {
			return await User.findAll({
				attributes: { exclude: ['password'] },
			});

		}
		const { username, name, surname, email, role } = query;

		const response = await User.findAll({
			where: {
				[Op.or]: [
					sequelize.where(sequelize.fn("LOWER", sequelize.col("qty")), "LIKE", `%${username}%`),
					sequelize.where(sequelize.fn("LOWER", sequelize.col("year")), "LIKE", `%${name}%`),
					sequelize.literal(`LOWER(CONCAT_WS(' ', "qty", "year", "courseId")) LIKE '%${surname}%'`),
					sequelize.literal(`LOWER(CONCAT_WS(' ', "qty", "year", "courseId")) LIKE '%${email}%'`),
					sequelize.literal(`LOWER(CONCAT_WS(' ', "qty", "year", "courseId")) LIKE '%${role}%'`),
				],

			},
			atrributes: { exclude: ["password"] },
		});
		return response;
	} catch (error) {
		throw new FetchError('Unable to get all user', 500)
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