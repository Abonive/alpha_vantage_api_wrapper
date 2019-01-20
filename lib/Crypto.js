"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
const axios_1 = __importDefault(require("axios"));
class Crypto {
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
    daily(baseCurrency, market, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (baseCurrency == '')
                reject(consts_1.NO_BASE_CURRENCY);
            if (market == '')
                reject(consts_1.NO_DESTINATION_CURRENCY);
            this.setRequiredOptions(options, 'DIGITAL_CURRENCY_DAILY', baseCurrency, market);
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    weekly(baseCurrency, market, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (baseCurrency == '')
                reject(consts_1.NO_BASE_CURRENCY);
            if (market == '')
                reject(consts_1.NO_DESTINATION_CURRENCY);
            this.setRequiredOptions(options, 'DIGITAL_CURRENCY_WEEKLY', baseCurrency, market);
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    monthly(baseCurrency, market, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (baseCurrency == '')
                reject(consts_1.NO_BASE_CURRENCY);
            if (market == '')
                reject(consts_1.NO_DESTINATION_CURRENCY);
            this.setRequiredOptions(options, 'DIGITAL_CURRENCY_MONTHLY', baseCurrency, market);
            axios_1.default.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    setRequiredOptions(options, func, ticker, market) {
        Object.assign(options, {
            function: func,
            symbol: ticker.toUpperCase(),
            market: market.toUpperCase(),
            apikey: this._alpha._apiKey
        });
    }
}
exports.Crypto = Crypto;
