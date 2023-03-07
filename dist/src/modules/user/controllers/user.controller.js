"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetOneUsers = exports.handleGetAllUsers = exports.handleUpdateUser = exports.handleDeleteUser = exports.handleLogin = exports.handleCreateUser = void 0;
const user_service_1 = __importDefault(require("./../services/user.service"));
const user_exception_1 = require("./../../../common/exceptions/user.exception");
const app_exception_1 = require("../../../common/exceptions/app.exception");
const handleCreateUser = async (req, res) => {
    try {
        const user = await user_service_1.default.createUser(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        if (error instanceof user_exception_1.UserAlreadyExistsError) {
            res.status(400).json({ message: error.message });
        }
        else {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
exports.handleCreateUser = handleCreateUser;
const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const { token } = await user_service_1.default.login(username, password);
        res.status(200).json({ message: "login was successfully", token });
    }
    catch (error) {
        console.error(error);
        if (error instanceof user_exception_1.AuthError) {
            res.status(401).json({ message: error.message, token: "" });
        }
        else if (error instanceof user_exception_1.LoginError) {
            res.status(500).json({ message: error.message, token: "" });
        }
        else {
            res.status(500).json({ message: 'Internal server error', token: "" });
        }
    }
};
exports.handleLogin = handleLogin;
const handleDeleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await user_service_1.default.deleteUser(id);
        res.status(200).json({ message: `User with id ${id} has been deleted successfully` });
    }
    catch (error) {
        console.error(error);
        if (error instanceof user_exception_1.UserNotFoundException) {
            res.status(404).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
exports.handleDeleteUser = handleDeleteUser;
const handleUpdateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    try {
        const updatedUser = await user_service_1.default.updateUser(id, user);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        console.error(error);
        if (error instanceof user_exception_1.UserNotFoundException) {
            res.status(404).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
exports.handleUpdateUser = handleUpdateUser;
const handleGetAllUsers = async (req, res) => {
    const query = req.query;
    // Validate input
    // if (typeof query !== 'object' || query === null || Object.keys(query).length === 0) {
    //   res.status(400).json({ message: 'Invalid query parameters' });
    //   return;
    // }
    try {
        const users = await user_service_1.default.getAllUsers(query);
        res.status(200).json({
            message: 'Successfully retrieved all users',
            payload: users,
        });
    }
    catch (error) {
        console.error(error);
        if (error instanceof app_exception_1.FetchError) {
            res.status(error.status).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "something went wrong!" });
        }
    }
};
exports.handleGetAllUsers = handleGetAllUsers;
const handleGetOneUsers = async (req, res) => {
    try {
        const id = req.params.id;
        const users = await user_service_1.default.getOneUser(id);
        res.status(200).json(users);
    }
    catch (error) {
        console.error(error);
        if (error instanceof app_exception_1.FetchError) {
            res.status(error.status).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
exports.handleGetOneUsers = handleGetOneUsers;
exports.default = {
    handleLogin: exports.handleLogin,
    handleGetAllUsers: exports.handleGetAllUsers,
    handleCreateUser: exports.handleCreateUser,
    handleDeleteUser: exports.handleDeleteUser,
    handleUpdateUser: exports.handleUpdateUser
};
