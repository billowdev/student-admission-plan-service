"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_constant_1 = require("./../constants/db.constant");
module.exports = {
    development: {
        username: db_constant_1.DB_USERNAME_DEV,
        password: db_constant_1.DB_PASSWORD_DEV,
        database: db_constant_1.DB_DATABASE_DEV,
        host: db_constant_1.DB_HOST_DEV,
        dialect: db_constant_1.DB_DIALECT,
        // sync: { alter: true } // automatic schema updates
    },
    test: {
        username: db_constant_1.DB_USERNAME_TEST,
        password: db_constant_1.DB_PASSWORD_TEST,
        database: db_constant_1.DB_DATABASE_TEST,
        host: db_constant_1.DB_HOST_TEST,
        dialect: db_constant_1.DB_DIALECT,
        // sync: { alter: true } // automatic schema updates
    },
    production: {
        username: db_constant_1.DB_USERNAME_PROD,
        password: db_constant_1.DB_PASSWORD_PROD,
        database: db_constant_1.DB_DATABASE_PROD,
        host: db_constant_1.DB_HOST_PROD,
        dialect: db_constant_1.DB_DIALECT,
        // sync: { alter: false } // disable automatic schema updates
    },
};
