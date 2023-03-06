"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchError = exports.AppError = void 0;
class AppError extends Error {
    status;
    message;
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
exports.AppError = AppError;
class FetchError extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.name = "FetchError";
        this.status = status;
    }
}
exports.FetchError = FetchError;
