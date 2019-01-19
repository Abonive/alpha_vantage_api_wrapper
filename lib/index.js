"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stocks_1 = require("./Stocks");
class Alpha {
    /**
     *
     * @param apiKey string
     */
    constructor(apiKey) {
        this._url = 'https://www.alphavantage.co/query';
        this._apiKey = apiKey;
        this.stocks = new Stocks_1.Stocks(this);
    }
    hasApiKey() {
        if (!this._apiKey) {
            return false;
        }
        else {
            return true;
        }
    }
}
exports.Alpha = Alpha;
