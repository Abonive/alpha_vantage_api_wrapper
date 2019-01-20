let joi = require('joi');
import { isNullOrUndefined } from 'util';

const _schema: any = joi.object().keys({
    datatype: joi.any().valid('csv', 'json'),
    outputsize: joi.any().valid('compact', 'full'),
    interval: joi.any().valid('1min', '5min', '15min', '30min', '60min')
})

export class Validator {
    static validateOptions(options: Object, forbiddenKeys: String | Array<String> = '') {
        if (options == {}) {
            return null
        }

        let err = null;
        if (isNullOrUndefined(forbiddenKeys) || forbiddenKeys == '') {
            let { error } = joi.validate(options, _schema)
            err = error;
        } else {
            let { error } = joi.validate(options, _schema.forbiddenKeys(forbiddenKeys))
            err = error;
        }

        return err
    }
}