"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorSerializer_1 = require("./ErrorSerializer");
const Validator_1 = require("./Validator");
const consts_1 = require("./consts");
const axios_1 = __importDefault(require("axios"));
class Forex {
    constructor(alpha) {
        this._interval = '5min';
        this._alpha = alpha;
    }
    exchageRate(baseCurrency, destinationCurrency) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (baseCurrency == '')
                reject(consts_1.NO_BASE_CURRENCY);
            if (destinationCurrency == '')
                reject(consts_1.NO_DESTINATION_CURRENCY);
            let options = {
                apikey: this._alpha._apiKey,
                function: 'CURRENCY_EXCHANGE_RATE',
                from_currency: baseCurrency.toUpperCase(),
                to_currency: destinationCurrency.toUpperCase()
            };
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    intraday(baseCurrency, destinationCurrency, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (baseCurrency == '')
                reject(consts_1.NO_BASE_CURRENCY);
            if (destinationCurrency == '')
                reject(consts_1.NO_DESTINATION_CURRENCY);
            let options_err = Validator_1.Validator.validateOptions(options);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            if (!options.hasOwnProperty('interval')) {
                Object.assign(options, { interval: this._interval });
            }
            this.setRequiredOptions(options, 'FX_INTRADAY', baseCurrency, destinationCurrency);
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    daily(baseCurrency, destinationCurrency, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (baseCurrency == '')
                reject(consts_1.NO_BASE_CURRENCY);
            if (destinationCurrency == '')
                reject(consts_1.NO_DESTINATION_CURRENCY);
            let options_err = Validator_1.Validator.validateOptions(options, 'interval');
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            this.setRequiredOptions(options, 'FX_DAILY', baseCurrency, destinationCurrency);
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    weekly(baseCurrency, destinationCurrency, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (baseCurrency == '')
                reject(consts_1.NO_BASE_CURRENCY);
            if (destinationCurrency == '')
                reject(consts_1.NO_DESTINATION_CURRENCY);
            let options_err = Validator_1.Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            this.setRequiredOptions(options, 'FX_DAILY', baseCurrency, destinationCurrency);
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    monthly(baseCurrency, destinationCurrency, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (baseCurrency == '')
                reject(consts_1.NO_BASE_CURRENCY);
            if (destinationCurrency == '')
                reject(consts_1.NO_DESTINATION_CURRENCY);
            let options_err = Validator_1.Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            this.setRequiredOptions(options, 'FX_DAILY', baseCurrency, destinationCurrency);
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    setRequiredOptions(options, func, from, to) {
        Object.assign(options, {
            function: func,
            from_symbol: from.toUpperCase(),
            to_symbol: to.toUpperCase(),
            apikey: this._alpha._apiKey
        });
    }
}
exports.Forex = Forex;
