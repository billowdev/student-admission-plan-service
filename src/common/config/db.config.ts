import {
  DB_DIALECT,
   DB_DATABASE_DEV, 
   DB_USERNAME_DEV,
   DB_HOST_DEV, 
   DB_PASSWORD_DEV ,

   DB_DATABASE_PROD, 
   DB_USERNAME_PROD,
   DB_HOST_PROD, 
   DB_PASSWORD_PROD ,

   DB_DATABASE_TEST, 
   DB_USERNAME_TEST,
   DB_HOST_TEST, 
   DB_PASSWORD_TEST 
  } from './../constants/db.constant';
 
module.exports = {
  development: {
    username: DB_USERNAME_DEV,
    password: DB_PASSWORD_DEV,
    database: DB_DATABASE_DEV,
    host: DB_HOST_DEV,
    dialect: DB_DIALECT,
    // sync: { alter: true } // automatic schema updates
  },
  test: {
    username: DB_USERNAME_TEST,
    password: DB_PASSWORD_TEST,
    database: DB_DATABASE_TEST,
    host: DB_HOST_TEST,
    dialect: DB_DIALECT,
    // sync: { alter: true } // automatic schema updates
  },
  production: {
    username: DB_USERNAME_PROD,
    password: DB_PASSWORD_PROD,
    database: DB_DATABASE_PROD,
    host: DB_HOST_PROD,
    dialect: DB_DIALECT,
    // sync: { alter: false } // disable automatic schema updates
  },
};
