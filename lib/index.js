"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stocks_1 = require("./Stocks");
const Sector_1 = require("./Sector");
const Forex_1 = require("./Forex");
class Alpha {
    /**
     *
     * @param apiKey string
     */
    constructor(apiKey) {
        this._url = 'https://www.alphavantage.co/query';
        this._apiKey = apiKey;
        this.stocks = new Stocks_1.Stocks(this);
        this.sector = new Sector_1.Sector(this);
        this.forex = new Forex_1.Forex(this);
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
