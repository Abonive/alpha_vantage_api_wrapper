import { isObject } from 'util';
import { Alpha } from './index';
import axios from 'axios'
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
            if(!this._alpha.hasApiKey()) reject('No API Key provided')

            if(options != {}) {
                 let {error} = joi.validate(options, schema)
                 if(error) {
                     reject(error)
                 }
            }

            if (!options.hasOwnProperty('interval')) {
                Object.assign(options, { interval: this._interval})
            }

            Object.assign(options, {
                function: 'TIME_SERIES_INTRADAY',
                symbol: ticker.toUpperCase(),
                apikey: this._alpha._apiKey
            })

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
            if (!this._alpha.hasApiKey()) reject('No API Key provided')

            if (options != {}) {
                let { error } = joi.validate(options, schema.forbiddenKeys('interval'))
                if (error) {
                    reject(error)
                }
            }

            Object.assign(options, {
                function: 'TIME_SERIES_DAILY',
                symbol: ticker.toUpperCase(),
                apikey: this._alpha._apiKey
            })

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        });
    }
}