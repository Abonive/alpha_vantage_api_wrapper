import {Stocks} from './Stocks'

export class Alpha {
  _apiKey: string;
  _url: string = 'https://www.alphavantage.co/query';
  stocks: Stocks;

  /**
   * 
   * @param apiKey string
   */
  constructor (apiKey: string) {
    this._apiKey = apiKey;
    this.stocks = new Stocks(this);
  }

  protected hasApiKey() {
    if(!this._apiKey) {
      return false;
    } else {
      return true;
    }
  }
}