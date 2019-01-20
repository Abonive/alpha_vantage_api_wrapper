import { Alpha } from './index';
import { ErrorSerializer } from './ErrorSerializer'
import {Validator} from './Validator'
import { NO_TOKEN, NO_TICKER } from './consts'
import axios from 'axios'
import { isNullOrUndefined } from 'util';
let joi = require('joi');

let schema = joi.object().keys({
    datatype: joi.any().valid('csv', 'json'),
    outputsize: joi.any().valid('compact', 'full'),
    interval: joi.any().valid('1min','5min','15min','30min','60min')
})



export class Stocks {
    _alpha: Alpha
    readonly _interval: string = '5min';

    constructor(alpha: Alpha) {
        this._alpha = alpha
    }

    /**
     * This API returns intraday time series (timestamp, open, high, low, close, volume) of the equity specified.
     * @param ticker 
     * @param options 
     */
    public intraday(ticker: string, options: object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)


            let options_err = Validator.validateOptions(options);
            if(options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            if (!options.hasOwnProperty('interval')) {
                Object.assign(options, { interval: this._interval})
            }

            this.setRequiredOptions(options, 'TIME_SERIES_INTRADAY', ticker.toUpperCase());

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        });
    }

    public daily(ticker: string, options: object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let options_err = Validator.validateOptions(options, 'interval');
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            this.setRequiredOptions(options, 'TIME_SERIES_DAILY', ticker.toUpperCase());

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        });
    }

    public dailyAdjusted(ticker: string, options: object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let options_err = Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            this.setRequiredOptions(options, 'TIME_SERIES_DAILY_ADJUSTED', ticker.toUpperCase());

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        });
    }

    public weekly(ticker: string, options: object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let options_err = Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            this.setRequiredOptions(options, 'TIME_SERIES_WEEKLY', ticker.toUpperCase());

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        });
    }

    public weeklyAdjusted(ticker: string, options: object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let options_err = Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            this.setRequiredOptions(options, 'TIME_SERIES_WEEKLY_ADJUSTED', ticker.toUpperCase());

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        });
    }

    public monthly(ticker: string, options: object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let options_err = Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            this.setRequiredOptions(options, 'TIME_SERIES_MONTHLY', ticker.toUpperCase());

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        });
    }

    public monthlyAdjusted(ticker: string, options: object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let options_err = Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            this.setRequiredOptions(options, 'TIME_SERIES_MONTHLY_ADJUSTED', ticker.toUpperCase());

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        });
    }

    public quote(ticker: string, options: object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)

            let options_err = Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            this.setRequiredOptions(options, 'GLOBAL_QUOTE', ticker.toUpperCase());

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        });
    }

    public search(ticker: string, options: object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let options_err = Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            this.setRequiredOptionsSearch(options, 'SYMBOL_SEARCH', ticker.toUpperCase());

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        });
    }

    protected setRequiredOptions(options: object, func: string, symbol: string) {
        Object.assign(options, {
            function: func,
            symbol: symbol.toUpperCase(),
            apikey: this._alpha._apiKey
        })
    }

    protected setRequiredOptionsSearch(options: object, func: string, symbol: string) {
        Object.assign(options, {
            function: func,
            keywords: symbol.toUpperCase(),
            apikey: this._alpha._apiKey
        })
    }
}