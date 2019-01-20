import {Alpha} from './index'
import { ErrorSerializer } from './ErrorSerializer'
import { NO_TOKEN, NO_TICKER } from './consts'
import axios from 'axios'

export class Sector {
    _alpha: Alpha;

    constructor(alpha: Alpha) {
        this._alpha = alpha
    }

    public performance() {
        return new Promise((reject: Function, resolve: Function) => {
            if (!this._alpha.hasApiKey()) reject(NO_TOKEN)
            let options: object = {
                apikey: this._alpha._apiKey,
                function: 'SECTOR',
            }

            axios.get(this._alpha._url, {
                params: options
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err.data)
            })
        })
    }
}