"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 5000,
    webtoken: process.env.JWT_SECRET,
    client: process.env.CLIENT_URL,
};
exports.default = config;
