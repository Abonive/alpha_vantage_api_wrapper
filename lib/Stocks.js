"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorSerializer_1 = require("./ErrorSerializer");
const Validator_1 = require("./Validator");
const consts_1 = require("./consts");
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
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let options_err = Validator_1.Validator.validateOptions(options);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            if (!options.hasOwnProperty('interval')) {
                Object.assign(options, { interval: this._interval });
            }
            this.setRequiredOptions(options, 'TIME_SERIES_INTRADAY', ticker.toUpperCase());
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
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let options_err = Validator_1.Validator.validateOptions(options, 'interval');
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            this.setRequiredOptions(options, 'TIME_SERIES_DAILY', ticker.toUpperCase());
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    dailyAdjusted(ticker, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let options_err = Validator_1.Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            this.setRequiredOptions(options, 'TIME_SERIES_DAILY_ADJUSTED', ticker.toUpperCase());
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    weekly(ticker, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let options_err = Validator_1.Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            this.setRequiredOptions(options, 'TIME_SERIES_WEEKLY', ticker.toUpperCase());
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    weeklyAdjusted(ticker, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let options_err = Validator_1.Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            this.setRequiredOptions(options, 'TIME_SERIES_WEEKLY_ADJUSTED', ticker.toUpperCase());
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    monthly(ticker, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let options_err = Validator_1.Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            this.setRequiredOptions(options, 'TIME_SERIES_MONTHLY', ticker.toUpperCase());
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    monthlyAdjusted(ticker, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let options_err = Validator_1.Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            this.setRequiredOptions(options, 'TIME_SERIES_MONTHLY_ADJUSTED', ticker.toUpperCase());
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    quote(ticker, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            let options_err = Validator_1.Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            this.setRequiredOptions(options, 'GLOBAL_QUOTE', ticker.toUpperCase());
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    search(ticker, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let options_err = Validator_1.Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            this.setRequiredOptionsSearch(options, 'SYMBOL_SEARCH', ticker.toUpperCase());
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    setRequiredOptions(options, func, symbol) {
        Object.assign(options, {
            function: func,
            symbol: symbol.toUpperCase(),
            apikey: this._alpha._apiKey
        });
    }
    setRequiredOptionsSearch(options, func, symbol) {
        Object.assign(options, {
            function: func,
            keywords: symbol.toUpperCase(),
            apikey: this._alpha._apiKey
        });
    }
}
exports.Stocks = Stocks;
