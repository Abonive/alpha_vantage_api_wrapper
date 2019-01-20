"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stocks_1 = require("./Stocks");
const Sector_1 = require("./Sector");
const Forex_1 = require("./Forex");
const Crypto_1 = require("./Crypto");
const TechInd_1 = require("./TechInd");
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
        this.crypto = new Crypto_1.Crypto(this);
        this.techInd = new TechInd_1.TechInd(this);
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
