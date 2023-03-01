import argon2 from 'argon2';
import db from "../../../database/models"
import { UserAttributes } from './../types/user.model.types';

const User = db.User

export type UserLoginType = {
	username: string,
	password: string
}

const hashPassword = async (password: string): Promise<string> => {
	const hash = await argon2.hash(password);
	return hash;
};

const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
	const isPasswordCorrect = await argon2.verify(hashedPassword, password);
	return isPasswordCorrect;
};


export const handleGetAllUser = () => {
	// const data = 
	return {
		username: "hello",
		password: "world"
	}
}
export const login = async (user: UserLoginType) => {
	try {
		const hashing = await hashPassword(user.password)
		return { ...user, hashing }

	} catch (error) {
		return error
	}
}

export const createUser = async (user: any): Promise<any> => {
	const hashing = await hashPassword(user.password)
	const response = await User.create({
		username: user.username,
		password: hashing,
	});

	return response;
};

export default {
	handleGetAllUser,
	login,
	createUser
}