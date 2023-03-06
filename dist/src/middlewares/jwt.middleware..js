"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJwtToken = void 0;
const common_constants_1 = require("./../common/constants/common.constants");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const common_constants_2 = require("./../common/constants/common.constants");
const createJwtToken = (claims) => {
    const token = jsonwebtoken_1.default.sign({
        ...claims
    }, common_constants_1.JWT_SECRET, {
        expiresIn: common_constants_2.JWT_EXPRIES,
    });
    return token;
};
exports.createJwtToken = createJwtToken;
