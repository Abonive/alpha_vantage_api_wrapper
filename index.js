let Alpha = require('./lib/index').Alpha

const a = new Alpha('REE8808MDBQ589HQ')

a.stocks.search('BBVA').then((res) => {
  // console.log(res["Meta Data"]["2. Symbol"]);
  console.log(res);
})