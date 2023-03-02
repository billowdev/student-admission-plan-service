"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExistsError = exports.UserCreationError = exports.UserExistsError = exports.LoginError = exports.UserNotFoundException = exports.createAuthError = exports.AuthError = void 0;
class AuthError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthError";
    }
}
exports.AuthError = AuthError;
const createAuthError = (message) => {
    return new AuthError(message);
};
exports.createAuthError = createAuthError;
class UserNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = "UserNotFoundException";
    }
}
exports.UserNotFoundException = UserNotFoundException;
class LoginError extends Error {
    constructor(message) {
        super(message);
        this.name = 'LoginError';
    }
}
exports.LoginError = LoginError;
class UserExistsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserExistsError';
    }
}
exports.UserExistsError = UserExistsError;
class UserCreationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserCreationError';
    }
}
exports.UserCreationError = UserCreationError;
class UserAlreadyExistsError extends Error {
    constructor(message) {
        super(message);
        this.name = "UserAlreadyExistsError";
    }
}
exports.UserAlreadyExistsError = UserAlreadyExistsError;
