# Alpha Vantage API - Node.js Wrapper [![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)
This is a simple wrapper package for the Alpha Vantage API<br>
For now it only works for Stocks, Forex & Sectors.

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
* [Sector](#sector-api)
    * [Performance](#performance)

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
    "datatype": "json" || "csv",
    "outputsize": "compact" || "full",
    "interval": "1min" || "5min" || "15min" || "30min" || "60min"
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
    "datatype": "json" || "csv",
    "outputsize": "compact" || "full",
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
    "datatype": "json" || "csv",
    "outputsize": "compact" || "full",
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
    "datatype": "json" || "csv",
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
    "datatype": "json" || "csv",
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
    "datatype": "json" || "csv",
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
    "datatype": "json" || "csv",
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
    "datatype": "json" || "csv",
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
    "datatype": "json" || "csv",
}
```

```js
alpha.stocks.search(ticker, options = optional)
```

# Forex API
## Fx Echange Rates
This API returns the realtime exchange rate for any pair of digital currency (e.g., Bitcoin) or physical currency (e.g., USD).
```js
alpha.forex.exchageRate(baseCurrency, destinationCurrency)
```
## Fx Intraday
This API returns intraday time series (timestamp, open, high, low, close) of the FX currency pair specified, updated realtime.

Available options = **object**
```javascript
{
    "datatype": "json" || "csv",
    "outputsize": "compact" || "full",
    "interval": "1min" || "5min" || "15min" || "30min" || "60min"
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
    "datatype": "json" || "csv",
    "outputsize": "compact" || "full",
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
    "datatype": "json" || "csv",
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
    "datatype": "json" || "csv",
}
```

```js
alpha.forex.monthly(baseCurrency, destinationCurrency, options = optional)
```


# Sector API
## Performance
This API returns the realtime and historical sector performances calculated from S&P500 incumbents.
```js
alpha.sector.performance()
```