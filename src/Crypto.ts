import { Alpha } from './index'
import { ErrorSerializer } from './ErrorSerializer'
import { Validator } from './Validator'
import { NO_TOKEN, NO_BASE_CURRENCY, NO_DESTINATION_CURRENCY } from './consts'
import axios from 'axios'

export class Crypto {
    _alpha: Alpha;
    readonly _interval: string = '5min'

    constructor(alpha: Alpha) {
        this._alpha = alpha
    }

    public exchageRate(baseCurrency: string, destinationCurrency: string) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (baseCurrency == '') reject(NO_BASE_CURRENCY)
            if (destinationCurrency == '') reject(NO_DESTINATION_CURRENCY)
            
            let options: object = {
                apikey: this._alpha._apiKey,
                function: 'CURRENCY_EXCHANGE_RATE',
                from_currency: baseCurrency.toUpperCase(),
                to_currency: destinationCurrency.toUpperCase()
            }

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        });
    }

    public daily(baseCurrency: string, market: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (baseCurrency == '') reject(NO_BASE_CURRENCY)
            if (market == '') reject(NO_DESTINATION_CURRENCY)

            this.setRequiredOptions(options, 'DIGITAL_CURRENCY_DAILY', baseCurrency, market);

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public weekly(baseCurrency: string, market: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (baseCurrency == '') reject(NO_BASE_CURRENCY)
            if (market == '') reject(NO_DESTINATION_CURRENCY)

            this.setRequiredOptions(options, 'DIGITAL_CURRENCY_WEEKLY', baseCurrency, market);

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public monthly(baseCurrency: string, market: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (baseCurrency == '') reject(NO_BASE_CURRENCY)
            if (market == '') reject(NO_DESTINATION_CURRENCY)

            this.setRequiredOptions(options, 'DIGITAL_CURRENCY_MONTHLY', baseCurrency, market);

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }
    
    protected setRequiredOptions(options: object, func: string, ticker: string, market: string) {
        Object.assign(options, {
            function: func,
            symbol: ticker.toUpperCase(),
            market: market.toUpperCase(),
            apikey: this._alpha._apiKey
        })
    }
}