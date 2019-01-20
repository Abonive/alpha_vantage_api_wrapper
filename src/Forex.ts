import { Alpha } from './index'
import { ErrorSerializer } from './ErrorSerializer'
import { Validator } from './Validator'
import { NO_TOKEN, NO_BASE_CURRENCY, NO_DESTINATION_CURRENCY } from './consts'
import axios from 'axios'

export class Forex {
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

    public intraday(baseCurrency: string, destinationCurrency: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (baseCurrency == '') reject(NO_BASE_CURRENCY)
            if (destinationCurrency == '') reject(NO_DESTINATION_CURRENCY)

            let options_err = Validator.validateOptions(options);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            if (!options.hasOwnProperty('interval')) {
                Object.assign(options, { interval: this._interval })
            }

            this.setRequiredOptions(options, 'FX_INTRADAY', baseCurrency, destinationCurrency);

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public daily(baseCurrency: string, destinationCurrency: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (baseCurrency == '') reject(NO_BASE_CURRENCY)
            if (destinationCurrency == '') reject(NO_DESTINATION_CURRENCY)

            let options_err = Validator.validateOptions(options, 'interval');
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            this.setRequiredOptions(options, 'FX_DAILY', baseCurrency, destinationCurrency);

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public weekly(baseCurrency: string, destinationCurrency: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (baseCurrency == '') reject(NO_BASE_CURRENCY)
            if (destinationCurrency == '') reject(NO_DESTINATION_CURRENCY)

            let options_err = Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            this.setRequiredOptions(options, 'FX_DAILY', baseCurrency, destinationCurrency);

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public monthly(baseCurrency: string, destinationCurrency: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (baseCurrency == '') reject(NO_BASE_CURRENCY)
            if (destinationCurrency == '') reject(NO_DESTINATION_CURRENCY)

            let options_err = Validator.validateOptions(options, ['interval', 'outputsize']);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            this.setRequiredOptions(options, 'FX_DAILY', baseCurrency, destinationCurrency);

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }
    
    protected setRequiredOptions(options: object, func: string, from: string, to: string) {
        Object.assign(options, {
            function: func,
            from_symbol: from.toUpperCase(),
            to_symbol: to.toUpperCase(),
            apikey: this._alpha._apiKey
        })
    }
}