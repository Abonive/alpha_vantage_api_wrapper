"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let joi = require('joi');
const util_1 = require("util");
const _schema = joi.object().keys({
    datatype: joi.any().valid('csv', 'json'),
    outputsize: joi.any().valid('compact', 'full'),
    interval: joi.any().valid('1min', '5min', '15min', '30min', '60min')
});
const _schemaTechInd = joi.object().keys({
    datatype: joi.any().valid('csv', 'json'),
    interval: joi.any().valid('1min', '5min', '15min', '30min', '60min', 'daily', 'weekly', 'monthly'),
    series_type: joi.any().valid('close', 'open', 'high', 'low'),
    time_period: joi.number().integer()
});
const _schemaBBands = _schemaTechInd.keys({
    nbdevup: joi.number().positive(),
    nbdevdn: joi.number().positive(),
    matype: joi.number().min(0).max(8),
});
const _schemaMAMA = _schemaTechInd.keys({
    fastlimit: joi.number().positive().precision(2),
    slowlimit: joi.number().positive().precision(2),
});
const _schemaMACD = _schemaTechInd.keys({
    fastperiod: joi.number().positive(),
    slowperiod: joi.number().positive(),
    signalperiod: joi.number().positive(),
});
const _schemaMACDEXT = _schemaMACD.keys({
    fastmatype: joi.number().min(0).max(8),
    slowmatype: joi.number().min(0).max(8),
    signalmatype: joi.number().min(0).max(8),
});
const _schemaSTOCH = _schemaTechInd.keys({
    fastkperiod: joi.number().positive(),
    slowkperiod: joi.number().positive(),
    slowdperiod: joi.number().positive(),
    slowkmatype: joi.number().min(0).max(8),
    slowdmatype: joi.number().min(0).max(8),
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
    static validateTechInd(options, schema = '_schema', forbiddenKeys = '') {
        if (options == {}) {
            return null;
        }
        let err = null;
        let _s = this.getSchema(schema);
        if (util_1.isNullOrUndefined(forbiddenKeys) || forbiddenKeys == '') {
            let { error } = joi.validate(options, _s);
            err = error;
        }
        else {
            let { error } = joi.validate(options, _s.forbiddenKeys(forbiddenKeys));
            err = error;
        }
        return err;
    }
    static getSchema(schema) {
        if (schema == '_schema') {
            return _schemaTechInd;
        }
        if (schema.toLowerCase() == 'mama') {
            return _schemaMAMA;
        }
        if (schema.toLowerCase() == 'macd') {
            return _schemaMACD;
        }
        if (schema.toLowerCase() == 'macdext') {
            return _schemaMACDEXT;
        }
        if (schema.toLowerCase() == 'bands') {
            return _schemaBBands;
        }
        if (schema.toLowerCase() == 'stoch') {
            return _schemaSTOCH;
        }
    }
}
exports.Validator = Validator;
