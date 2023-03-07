"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUser = exports.getAllUsers = exports.deleteUser = exports.updateUser = exports.createUser = exports.login = void 0;
const user_exception_1 = require("../../../common/exceptions/user.exception");
const password_hasher_1 = require("../../../common/utils/password-hasher");
const models_1 = __importDefault(require("../../../database/models"));
const sequelize_1 = require("sequelize");
const app_exception_1 = require("../../../common/exceptions/app.exception");
const jwt_middleware_1 = require("../../../middlewares/jwt.middleware.");
const User = models_1.default.User;
const login = async (identifier, password) => {
    try {
        const user = await User.findOne({
            where: {
                [sequelize_1.Op.or]: [
                    { username: { [sequelize_1.Op.eq]: identifier } },
                    { email: { [sequelize_1.Op.eq]: identifier } },
                ],
            }, raw: true
        });
        if (!user) {
            const error = (0, user_exception_1.createAuthError)('Invalid username or password');
            throw error;
        }
        const passwordMatch = await (0, password_hasher_1.verifyPassword)(password, user.password);
        if (!passwordMatch) {
            const error = (0, user_exception_1.createAuthError)('Invalid username or password');
            throw error;
        }
        const token = (0, jwt_middleware_1.createJwtToken)({ id: user.id, role: user.role, name: user.name });
        return { token };
    }
    catch (error) {
        throw new user_exception_1.LoginError('Unable to log in');
    }
};
exports.login = login;
const createUser = async (user) => {
    try {
        const { username, email, password } = user;
        // Check if a user with the given email or username already exists
        const existingUser = await User.findOne({
            where: {
                [sequelize_1.Op.or]: [
                    { username: { [sequelize_1.Op.eq]: username } },
                    { email: { [sequelize_1.Op.eq]: email } },
                ],
            },
        });
        if (existingUser) {
            throw new user_exception_1.UserExistsError('Username or email already exists');
        }
        const hashedPassword = await (0, password_hasher_1.hashPassword)(password);
        const response = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        return response;
    }
    catch (error) {
        console.error(error);
        throw new user_exception_1.UserCreationError('Failed to create user');
    }
};
exports.createUser = createUser;
const updateUser = async (id, user) => {
    try {
        const existingUser = await User.findOne({ where: { id } });
        if (!existingUser) {
            throw new user_exception_1.UserNotFoundException(`User with id ${id} not found`);
        }
        const [updatedRowsCount] = await User.update(user, { where: { id } });
        if (updatedRowsCount !== 1) {
            throw new Error(`Failed to update user with id ${id}`);
        }
        const updatedUser = await User.findByPk(id);
        return updatedUser.toJSON();
    }
    catch (error) {
        throw error;
    }
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    const user = await User.findOne({ where: { id } });
    if (!user) {
        throw new user_exception_1.UserNotFoundException(`User with id ${id} not found`);
    }
    await User.destroy({ where: { id } });
};
exports.deleteUser = deleteUser;
const getAllUsers = async (query) => {
    try {
        if (Object.keys(query).length === 0) {
            return await User.findAll({
                attributes: {
                    exclude: ['password']
                }
            });
        }
        const { email, username, name, surname, phone, role, faculty } = query;
        const response = await User.findAll({
            where: {
                [sequelize_1.Op.and]: [
                    email && { email: { [sequelize_1.Op.iLike]: `%${email}%` } },
                    username && { username: { [sequelize_1.Op.iLike]: `%${username}%` } },
                    name && { name: { [sequelize_1.Op.iLike]: `%${name}%` } },
                    surname && { surname: { [sequelize_1.Op.iLike]: `%${surname}%` } },
                    phone && { phone: { [sequelize_1.Op.iLike]: `%${phone}%` } },
                    role && { role: { [sequelize_1.Op.eq]: role } },
                    faculty && { faculty: { [sequelize_1.Op.iLike]: `%${faculty}%` } },
                ].filter(Boolean),
            },
            attribues: {
                exclude: ['password']
            },
            raw: true,
        });
        return response;
    }
    catch (error) {
        throw new app_exception_1.FetchError("Unable to fetch users", 500);
    }
};
exports.getAllUsers = getAllUsers;
const getOneUser = async (id) => {
    try {
        const response = await User.findByPk(id, {
            attribues: {
                exclude: ['password']
            },
            raw: true
        });
        return response;
    }
    catch (error) {
        throw new app_exception_1.FetchError('Unable to get user', 500);
    }
};
exports.getOneUser = getOneUser;
exports.default = {
    login: exports.login,
    createUser: exports.createUser,
    deleteUser: exports.deleteUser,
    updateUser: exports.updateUser,
    getAllUsers: exports.getAllUsers,
    getOneUser: exports.getOneUser
};
