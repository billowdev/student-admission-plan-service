"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
const argon2_1 = __importDefault(require("argon2"));
const hashPassword = async (password) => {
    const hash = await argon2_1.default.hash(password, {
        type: argon2_1.default.argon2id,
    });
    return hash;
};
exports.hashPassword = hashPassword;
const verifyPassword = async (password, hash) => {
    const isMatch = await argon2_1.default.verify(hash, password);
    return isMatch;
};
exports.verifyPassword = verifyPassword;
