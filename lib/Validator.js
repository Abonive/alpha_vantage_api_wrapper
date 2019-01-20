"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let joi = require('joi');
const util_1 = require("util");
const _schema = joi.object().keys({
    datatype: joi.any().valid('csv', 'json'),
    outputsize: joi.any().valid('compact', 'full'),
    interval: joi.any().valid('1min', '5min', '15min', '30min', '60min')
});
class Validator {
    static validateOptions(options, forbiddenKeys = '') {
        if (options == {}) {
            return null;
        }
        let err = null;
        if (util_1.isNullOrUndefined(forbiddenKeys) || forbiddenKeys == '') {
            let { error } = joi.validate(options, _schema);
            err = error;
        }
        else {
            let { error } = joi.validate(options, _schema.forbiddenKeys(forbiddenKeys));
            err = error;
        }
        return err;
    }
}
exports.Validator = Validator;
