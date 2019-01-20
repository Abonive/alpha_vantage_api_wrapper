"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
const axios_1 = __importDefault(require("axios"));
const Validator_1 = require("./Validator");
const ErrorSerializer_1 = require("./ErrorSerializer");
class TechInd {
    constructor(alpha) {
        this._options = {
            interval: '5min',
            time_period: 60,
            series_type: 'close'
        };
        this._alpha = alpha;
    }
    sma(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'SMA', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    ema(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'EMA', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    wma(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'WMA', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    dema(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'DEMA', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    tema(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'TEMA', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    trima(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'TRIMA', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    kama(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'KAMA', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    mama(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options, 'mama');
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'MAMA', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    t3(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options);
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'T3', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    macd(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options, 'macd');
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'MACD', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    macdExt(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options, 'macdExt');
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'MACDEXT', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    stoch(ticker, options = {}) {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            if (ticker == '')
                reject(consts_1.NO_TICKER);
            let o = this._options;
            let options_err = Validator_1.Validator.validateTechInd(options, 'stoch');
            if (options_err) {
                reject(ErrorSerializer_1.ErrorSerializer.ValidationError(options_err));
            }
            Object.assign(o, options);
            this.setRequiredOptions(o, 'STOCH', ticker);
            axios_1.default.get(this._alpha._url, {
                params: o
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err.data);
            });
        });
    }
    setRequiredOptions(options, func, ticker) {
        Object.assign(options, {
            function: func,
            symbol: ticker.toUpperCase(),
            apikey: this._alpha._apiKey
        });
    }
}
exports.TechInd = TechInd;
