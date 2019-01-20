"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
class ErrorSerializer {
    static ValidationError(error) {
        let response = {
            status: consts_1.VALIDATION_ERROR,
            message: error.annotate,
            details: error.details
        };
        return response;
    }
}
exports.ErrorSerializer = ErrorSerializer;
