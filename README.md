# Alpha Vantage API - Node.js Wrapper
This is a simple wrapper package for the Alpha Vantage API

## Usage
Getting Simple Intraday Data for APPL
```javascript
var Alpha = require('alpha_vantage_api').Alpha
var alpha = new Alpha('api-key')

alpha.stocks.intraday('APPL')
.then((res) => {
    // To what you want with the data
})
.catch((err) => {
    // Handle the error
})
```