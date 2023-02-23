export enum RoleEnum {
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
	role? : RoleEnum;
	faculty?: string;
	createdAt?: Date;
	updatedAt?: Date;
  }
  