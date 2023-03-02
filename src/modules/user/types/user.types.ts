export enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
}

// export interface UserEnum
export interface UserAttributes {
	id?: string;
	email: string;
	username: string;
	password: string;
	name?: string;
	surname?: string;
	phone?: string;
	role?: UserRole;
	faculty?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface UserInterface {
	id?: string;
	email: string;
	username: string;
	password: string;
	name?: string;
	surname?: string;
	phone?: string;
	role: UserRole;
	faculty?: string;
}

export interface UserQueryInterface {
	email?: string;
	username?: string;
	name?: string;
	surname?: string;
	phone?: string;
	role?: UserRole;
	faculty?: string;
}

export type LoginResponse = {
	token: string;
}

export type UserIdentifier = {
	email: string ,
	username: string ,
}

