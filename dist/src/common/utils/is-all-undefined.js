"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAllValuesUndefined = void 0;
const isAllValuesUndefined = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
            return false;
        }
    }
    return true;
};
exports.isAllValuesUndefined = isAllValuesUndefined;
exports.default = exports.isAllValuesUndefined;
