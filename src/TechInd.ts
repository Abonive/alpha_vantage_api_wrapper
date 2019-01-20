import {Alpha} from './index'
import { NO_TOKEN, NO_TICKER } from './consts'
import axios from 'axios'
import { Validator } from './Validator';
import { ErrorSerializer } from './ErrorSerializer';

export class TechInd {
    _alpha: Alpha;
    _options: object = {
        interval: '5min',
        time_period: 60,
        series_type: 'close'
    }

    constructor(alpha: Alpha) {
        this._alpha = alpha
    }

    public sma(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'SMA', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public ema(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'EMA', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public wma(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'WMA', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public dema(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'DEMA', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public tema(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'TEMA', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public trima(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'TRIMA', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public kama(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'KAMA', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public mama(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options, 'mama');
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'MAMA', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public t3(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'T3', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public macd(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options, 'macd');
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'MACD', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public macdExt(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options, 'macdExt');
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'MACDEXT', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public stoch(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options, 'stoch');
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'STOCH', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public rsi(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o = this._options

            let options_err = Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'RSI', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public ad(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o: any = this._options
            delete o['series_type']
            delete o['time_period']

            let options_err = Validator.validateTechInd(options, '_schma', ['series_type', 'time_period']);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'AD', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public adx(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o :any = this._options   
            delete o['series_type']

            let options_err = Validator.validateTechInd(options, '_schma', 'series_type');
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'ADX', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public cci(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o: any = this._options
            delete o['series_type']

            let options_err = Validator.validateTechInd(options, '_schma', 'series_type');
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'CCI', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public aroon(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o: any = this._options
            delete o['series_type']

            let options_err = Validator.validateTechInd(options, '_schma', 'series_type');
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'AROON', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public bbands(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o: any = this._options

            let options_err = Validator.validateTechInd(options, 'bands');
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'BBANDS', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    public obv(ticker: string, options: object = {}) {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            if (ticker == '') reject(NO_TICKER)

            let o: any = this._options
            delete o['series_type']
            delete o['time_period']

            let options_err = Validator.validateTechInd(options, '_schma', ['series_type', 'time_period']);
            if (options_err) {
                reject(ErrorSerializer.ValidationError(options_err));
            }

            Object.assign(o, options);
            this.setRequiredOptions(o, 'OBV', ticker)

            axios.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }

    protected setRequiredOptions(options: object, func: string, ticker: string) {
        Object.assign(options, {
            function: func,
            symbol: ticker.toUpperCase(),
            apikey: this._alpha._apiKey
        })
    }
}