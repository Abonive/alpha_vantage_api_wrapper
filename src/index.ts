import { Stocks } from './Stocks'
import { Sector } from './Sector';
import { Forex } from './Forex';
import { Crypto } from './Crypto'
import { TechInd } from './TechInd';

export class Alpha {
  _apiKey: string;
  _url: string = 'https://www.alphavantage.co/query';
  stocks: Stocks;
  sector: Sector;
  forex: Forex;
  crypto: Crypto;
  techInd: TechInd;
  

  /**
   * 
   * @param apiKey string
   */
  constructor (apiKey: string) {
    this._apiKey = apiKey;
    this.stocks = new Stocks(this);
    this.sector = new Sector(this);
    this.forex = new Forex(this);
    this.crypto = new Crypto(this);
    this.techInd = new TechInd(this);
  }

  public hasApiKey() {
    if(!this._apiKey) {
      return false;
    } else {
      return true;
    }
  }
}