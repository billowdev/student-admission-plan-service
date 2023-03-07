"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
// import argon2 from 'argon2';
const bcrypt = require('bcrypt');
const hashPassword = async (password) => {
    // const hash = await argon2.hash(password, {
    //   type: argon2.argon2id,
    // });
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};
exports.hashPassword = hashPassword;
const verifyPassword = async (password, hash) => {
    // const isMatch = await argon2.verify(hash, password);
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
};
exports.verifyPassword = verifyPassword;
