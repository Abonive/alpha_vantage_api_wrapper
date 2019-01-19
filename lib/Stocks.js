"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
let joi = require('joi');
let schema = joi.object().keys({
    datatype: joi.any().valid('csv', 'json'),
    outputsize: joi.any().valid('compact', 'full'),
    interval: joi.any().valid('1min', '5min', '15min', '30min', '60min')
});
class Stocks {
    constructor(alpha) {
        this._interval = '5min';
        this._alpha = alpha;
    }
    /**
     * This API returns intraday time series (timestamp, open, high, low, close, volume) of the equity specified.
     * @param ticker
     * @param options
     */
    intraday(ticker, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this._alpha.hasApiKey())
                reject('No API Key provided');
            if (options != {}) {
                let { error } = joi.validate(options, schema);
                if (error) {
                    reject(error);
                }
            }
            if (!options.hasOwnProperty('interval')) {
                Object.assign(options, { interval: this._interval });
            }
            Object.assign(options, {
                function: 'TIME_SERIES_INTRADAY',
                symbol: ticker.toUpperCase(),
                apikey: this._alpha._apiKey
            });
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    daily(ticker, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this._alpha.hasApiKey())
                reject('No API Key provided');
            if (options != {}) {
                let { error } = joi.validate(options, schema.forbiddenKeys('interval'));
                if (error) {
                    reject(error);
                }
            }
            Object.assign(options, {
                function: 'TIME_SERIES_DAILY',
                symbol: ticker.toUpperCase(),
                apikey: this._alpha._apiKey
            });
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
}
exports.Stocks = Stocks;
