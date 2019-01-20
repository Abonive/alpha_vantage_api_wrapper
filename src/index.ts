import { Stocks } from './Stocks'
import { Sector } from './Sector';
import { Forex } from './Forex';

export class Alpha {
  _apiKey: string;
  _url: string = 'https://www.alphavantage.co/query';
  stocks: Stocks;
  sector: Sector;
  forex: Forex;
  

  /**
   * 
   * @param apiKey string
   */
  constructor (apiKey: string) {
    this._apiKey = apiKey;
    this.stocks = new Stocks(this);
    this.sector = new Sector(this);
    this.forex = new Forex(this);
  }

  public hasApiKey() {
    if(!this._apiKey) {
      return false;
    } else {
      return true;
    }
  }
}