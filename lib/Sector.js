"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
const axios_1 = __importDefault(require("axios"));
class Sector {
    constructor(alpha) {
        this._alpha = alpha;
    }
    performance() {
        return new Promise((reject, resolve) => {
            if (!this._alpha.hasApiKey())
                reject(consts_1.NO_TOKEN);
            let options = {
                apikey: this._alpha._apiKey,
                function: 'SECTOR',
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
}
exports.Sector = Sector;
