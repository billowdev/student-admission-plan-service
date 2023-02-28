import * as dotenv from 'dotenv';
dotenv.config();

export const DB_USERNAME_DEV = process.env.DB_USERNAME_DEV
export const DB_PASSWORD_DEV =  process.env.DB_PASSWORD_DEV
export const DB_DATABASE_DEV = process.env.DB_DATABASE_DEV
export const DB_HOST_DEV = process.env.DB_HOST_DEV

export const DB_USERNAME_PROD = process.env.DB_USERNAME_PROD
export const DB_PASSWORD_PROD =  process.env.DB_PASSWORD_PROD
export const DB_DATABASE_PROD = process.env.DB_DATABASE_PROD
export const DB_HOST_PROD = process.env.DB_HOST_PROD

export const DB_USERNAME_TEST = process.env.DB_USERNAME_TEST
export const DB_PASSWORD_TEST =  process.env.DB_PASSWORD_TEST
export const DB_DATABASE_TEST = process.env.DB_DATABASE_TEST
export const DB_HOST_TEST = process.env.DB_HOST_TEST

export const DB_DIALECT = process.env.DB_DIALECT



