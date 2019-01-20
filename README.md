# Alpha Vantage API - Node.js Wrapper [![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)
This is a simple wrapper package for the Alpha Vantage API<br>
Stocks, Forex, Crypto & Sector API are working.

*Technical indicators - work in progress*

* [Instalation](#instalation)
* [Usage](#usage)
* [Stocks](#stocks-api)
    * [Intraday](#intraday)
    * [Daily](#daily)
    * [Daily Adjusted](#daily-adjusted)
    * [Weekly](#weekly)
    * [Weekly Adjusted](#weekly-adjusted)
    * [Monthly](#monthly)
    * [Monthly Adjusted](#monthly-Adjusted)
    * [Quote](#quote)
    * [Search](#search)
* [Forex](#forex-api)
    * [Exchange Rates](#fx-exchange-rates)
    * [Intraday](#fx-intraday)
    * [Daily](#fx-daily)
    * [Weekly](#fx-weekly)
    * [Monthly](#fx-monthly)
* [Crypto](#crypto-api)
    * [Exchange Rates](#crypto-exchange-rates)
    * [Daily](#crypto-daily)
    * [Weekly](#crypto-weekly)
    * [Monthly](#crypto-monthly)
* [Sector](#sector-api)
    * [Performance](#performance)
* [Technical Indicators](#technical-indicators)
    * [SMA](#sma)
    * [EMA](#ema)
    * [WMA](#wma)
    * [DEMA](#dema)
    * [TEMA](#tema)
    * [TRIMA](#trima)
    * [KAMA](#kama)
    * [MAMA](#mama)
    * [T3](#t3)
    * [MACD](#macd)
    * [MACDEXT](#macdext)
    * [STOCH](#stoch)
    * [RSI](#rsi)
    * [RSI](#rsi)
    * [ADX](#adx)
    * [CCI](#cci)
    * [AROON](#aroon)
    * [BBANDS](#bbands)
    * [AD](#ad)
    * [OBV](#obv)
    * Rest - Work in progress

## Instalation
NPM
```bash
npm install --save alpha_vantage_api_wrapper
```

Yarn
```bash
yarn add alpha_vantage_api_wrapper
```

## Usage
Getting Simple Intraday Data for AAPL
```javascript
var Alpha = require('alpha_vantage_api_wrapper').Alpha
var alpha = new Alpha('api-key')

alpha.stocks.intraday('AAPL')
.then((res) => {
    // Do what you want with the data
})
.catch((err) => {
    // Handle the error
})
```


# Stocks API

## Intraday
This API returns intraday time series (timestamp, open, high, low, close, volume) of the equity specified.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
    "outputsize": "compact" || "full", // Default "compact"
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" // Default "5min"
}
```

```js
alpha.stocks.intraday(ticker, options = optional)
```

## Daily
This API returns daily time series (date, daily open, daily high, daily low, daily close, daily volume) of the global equity specified, covering 20+ years of historical data.<br>
The most recent data point is the cumulative prices and volume information of the current trading day, updated realtime.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
    "outputsize": "compact" || "full", // Default "compact"
}
```

```js
alpha.stocks.daily(ticker, options = optional)
```

## Daily Adjusted
This API returns daily time series (date, daily open, daily high, daily low, daily close, daily volume, daily adjusted close, and split/dividend events) of the global equity specified, covering 20+ years of historical data.<br>
The most recent data point is the cumulative prices and volume information of the current trading day, updated realtime.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
    "outputsize": "compact" || "full", // Default "compact"
}
```

```js
alpha.stocks.dailyAdjusted(ticker, options = optional)
```

## Weekly
This API returns weekly time series (last trading day of each week, weekly open, weekly high, weekly low, weekly close, weekly volume) of the global equity specified, covering 20+ years of historical data.<br>
The latest data point is the cumulative prices and volume information for the week (or partial week) that contains the current trading day, updated realtime.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
}
```

```js
alpha.stocks.weekly(ticker, options = optional)
```

## Weekly Adjusted
This API returns weekly adjusted time series (last trading day of each week, weekly open, weekly high, weekly low, weekly close, weekly adjusted close, weekly volume, weekly dividend) of the global equity specified, covering 20+ years of historical data.<br>
The latest data point is the cumulative prices and volume information for the week (or partial week) that contains the current trading day, updated realtime.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
}
```

```js
alpha.stocks.weeklyAdjusted(ticker, options = optional)
```

## Monthly
This API returns monthly time series (last trading day of each month, monthly open, monthly high, monthly low, monthly close, monthly volume) of the global equity specified, covering 20+ years of historical data.<br>
The latest data point is the cumulative prices and volume information for the month (or partial month) that contains the current trading day, updated realtime.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
}
```

```js
alpha.stocks.monthly(ticker, options = optional)
```

## Monthly Adjusted
This API returns monthly adjusted time series (last trading day of each month, monthly open, monthly high, monthly low, monthly close, monthly adjusted close, monthly volume, monthly dividend) of the equity specified, covering 20+ years of historical data.<br>
The latest data point is the cumulative prices and volume information for the month (or partial month) that contains the current trading day, updated realtime.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
}
```

```js
alpha.stocks.monthlyAdjusted(ticker, options = optional)
```

## Quote
A lightweight alternative to the time series APIs, this service returns the latest price and volume information for a security of your choice.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
}
```

```js
alpha.stocks.quote(ticker, options = optional)
```

## Search
Looking for some specific symbols or companies?

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
}
```

```js
alpha.stocks.search(ticker, options = optional)
```

# Forex API
## Fx Exchange Rates
This API returns the realtime exchange rate for any pair of digital currency (e.g., Bitcoin) or physical currency (e.g., USD).
```js
alpha.forex.exchageRate(baseCurrency, destinationCurrency)
```
## Fx Intraday
This API returns intraday time series (timestamp, open, high, low, close) of the FX currency pair specified, updated realtime.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
    "outputsize": "compact" || "full", // Default "compact"
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" // Default "5min"
}
```

```js
alpha.forex.intraday(baseCurrency, destinationCurrency, options = optional)
```

## Fx Daily
This API returns the daily time series (timestamp, open, high, low, close) of the FX currency pair specified, updated realtime.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
    "outputsize": "compact" || "full", // Default "compact"
}
```

```js
alpha.forex.daily(baseCurrency, destinationCurrency, options = optional)
```

## Fx Weekly
This API returns the weekly time series (timestamp, open, high, low, close) of the FX currency pair specified, updated realtime.<br>
The latest data point is the cumulative price information for the week (or partial week) containing the current trading day, updated realtime.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
}
```

```js
alpha.forex.weekly(baseCurrency, destinationCurrency, options = optional)
```

## Fx Monthly
This API returns the monthly time series (timestamp, open, high, low, close) of the FX currency pair specified, updated realtime.<br>
The latest data point is the cumulative prices information for the month (or partial month) containing the current trading day, updated realtime.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
}
```

```js
alpha.forex.monthly(baseCurrency, destinationCurrency, options = optional)
```

# Crypto API
## Crypto Exchange Rates
This API returns the realtime exchange rate for any pair of digital currency (e.g., Bitcoin) or physical currency (e.g., USD).
```js
alpha.crypto.exchageRate(baseCurrency, destinationCurrency)
```

## Crypto Daily
This API returns the daily historical time series for a digital currency (e.g., BTC) traded on a specific market (e.g., CNY/Chinese Yuan), refreshed daily at midnight (UTC). Prices and volumes are quoted in both the market-specific currency and USD.



Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
}
```

```js
alpha.crypto.daily(baseCurrency, destinationCurrency, options = optional)
```

## Crypto Weekly
This API returns the weekly historical time series for a digital currency (e.g., BTC) traded on a specific market (e.g., CNY/Chinese Yuan), refreshed daily at midnight (UTC). Prices and volumes are quoted in both the market-specific currency and USD.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
}
```

```js
alpha.crypto.weekly(baseCurrency, destinationCurrency, options = optional)
```

## Crypto Monthly
This API returns the monthly historical time series for a digital currency (e.g., BTC) traded on a specific market (e.g., CNY/Chinese Yuan), refreshed daily at midnight (UTC). Prices and volumes are quoted in both the market-specific currency and USD.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv", // Default "json"
}
```

```js
alpha.crypto.monthly(baseCurrency, destinationCurrency, options = optional)
```


# Sector API
## Performance
This API returns the realtime and historical sector performances calculated from S&P500 incumbents.
```js
alpha.sector.performance()
```

# Technical Indicators
## SMA
This API returns the simple moving average (SMA) values.<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
}
```

```js
alpha.techInd.sma(ticker, options)
```

## EMA
This API returns the exponential moving average (EMA) values.<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
}
```

```js
alpha.techInd.ema(ticker, options)
```

## WMA
This API returns the weighted moving average (WMA) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
}
```

```js
alpha.techInd.wma(ticker, options)
```

## DEMA
This API returns the double exponential moving average (DEMA) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
}
```

```js
alpha.techInd.dema(ticker, options)
```

## TEMA
This API returns the triple exponential moving average (TEMA) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
}
```

```js
alpha.techInd.tema(ticker, options)
```

## TRIMA
This API returns the triangular moving average (TRIMA) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
}
```

```js
alpha.techInd.trima(ticker, options)
```

## KAMA
This API returns the Kaufman adaptive moving average (KAMA) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
}
```

```js
alpha.techInd.kama(ticker, options)
```

## MAMA
This API returns the MESA adaptive moving average (MAMA) values.<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
    "fastlimit" 0.01, // Float - Default 0.01
    "slowlimit": 0.01 // Float - Default 0.01
}
```

```js
alpha.techInd.mama(ticker, options)
```

## T3
This API returns the triple exponential moving average (T3) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
}
```

```js
alpha.techInd.t3(ticker, options)
```

## MACD
This API returns the moving average convergence / divergence (MACD) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
    "fastperiod" 12, // Integer - Default 12
    "slowperiod": 26, // Integer - Default 26
    "signalperiod": 9, // Integer - Default 9
}
```

```js
alpha.techInd.mama(ticker, options)
```

## MACDEXT
This API returns the moving average convergence / divergence values with controllable moving average type<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
    "fastperiod" 12, // Integer - Default 12
    "slowperiod": 26, // Integer - Default 26
    "signalperiod": 9, // Integer - Default 9
    "fastmatype": 0, // Integer - Default 0-8
    "slowmatype": 0, // Integer - Default 0-8
    "signalmatype": 0, // Integer - Default 0-8
}
```

```js
alpha.techInd.mamaExt(ticker, options)
```

## STOCH
This API returns the stochastic oscillator (STOCH) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
    "fastkperiod" 5, // Integer - Default 5
    "slowkperiod": 3, // Integer - Default 3
    "slowdperiod": 3, // Integer - Default 3
    "slowkmatype": 0, // Integer - Default 0-8
    "slowdmatype": 0, // Integer - Default 0-8
}
```

```js
alpha.techInd.stoch(ticker, options)
```

## RSI
This API returns the relative strength index (RSI) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
}
```
```js
alpha.techInd.rsi(ticker, options)
```

## ADX
This API returns the average directional movement index (ADX) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "datatype": "json" || "csv", // String - Default "json"
}
```
```js
alpha.techInd.adx(ticker, options)
```

## CCI
This API returns the commodity channel index (CCI) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "datatype": "json" || "csv", // String - Default "json"
}
```
```js
alpha.techInd.cci(ticker, options)
```

## AROON
This API returns the Aroon (AROON) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "datatype": "json" || "csv", // String - Default "json"
}
```
```js
alpha.techInd.aroon(ticker, options)
```

## BBANDS
This API returns the Bollinger bands (BBANDS) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "time_period": 60 || 200 // Integer - Default 60
    "series_type": "close" || "open" || "high" || "low"  // String - Default "close"
    "datatype": "json" || "csv", // String - Default "json"
    "nbdevup": 2 // Integer - Default 2
    "nbdevdn": 2 // Integer - Default 2
    "matype": 0-8 // Integer - Default 0
}
```
```js
alpha.techInd.bbands(ticker, options)
```
## AD
This API returns the Chaikin A/D line (AD) values<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "datatype": "json" || "csv", // String - Default "json"
}
```
```js
alpha.techInd.ad(ticker, options)
```

## OBV
This API returns the on balance volume (OBV) valuesT<br>
Available options = **object**
```javascript
{   
    "interval": "1min" || "5min" || "15min" || "30min" || "60min" || "daily weekly" || "monthly" // String - Default = "5min"
    "datatype": "json" || "csv", // String - Default "json"
}
```
```js
alpha.techInd.obv<br>(ticker, options)
```