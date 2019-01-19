var Alpha = require('./lib/index').Alpha
var alpha = new Alpha('REE8808MDBQ589HQ');

alpha.stocks.daily('BBVA.MC')
.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error)
})


