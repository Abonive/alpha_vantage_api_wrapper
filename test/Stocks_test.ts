import { Alpha } from '../src/index'
import { Stocks } from '../src/Stocks'
import { NO_TOKEN, VALIDATION_ERROR, NO_TICKER } from '../src/consts'
import { expect, assert } from 'chai'
import mocha from 'mocha'

const keys = ['AUFM46ZT8MA5HJIK', 'DTR99FXNUOU7KAMA', 'DCQVVM90OSW7MPIA'];
var a: Alpha;
// const a = new Alpha('REE8808MDBQ589HQ')

describe('Gets Intraday Stock Data for MSFT', () => {
    beforeEach((done) => {
        setTimeout(() => {
            a = new Alpha(keys[Math.floor(Math.random() * keys.length)])
            done()
        }, 400);
    })

    it('Throws Validation Error for invalid Options Passed', (done) => {
        a.stocks.intraday('MSFT', {inteval: '30min'})
        .catch((err) => {
            expect(err.status).to.equal(VALIDATION_ERROR);
        })
        .catch((err) => {
          console.log(err)
        })
        .then(() => {
            done();
        })
    })

    it('Succesfully retrives Data with no options ', (done) => {
        a.stocks.intraday('MSFT')
            .then((res: any) => {
                expect(res["Meta Data"]["2. Symbol"]).to.equal('MSFT')
                expect(res["Meta Data"]["4. Interval"]).to.equal('5min')
            })
            .catch((err) => {
                console.log(err)
            })
            .then(() => {
                done();
            })
    })

    it('Succesfully retrives Data with options ', (done) => {
        a.stocks.intraday('MSFT', {
            interval: '30min',
        })
            .then((res: any) => {
                console.log(res)
                expect(res["Meta Data"]["2. Symbol"]).to.equal('MSFT')
                expect(res["Meta Data"]["4. Interval"]).to.equal('30min')
            })
            .catch((err) => {
                console.log(err)
            })
            .then(() => {
                done();
            })
    })
})

describe('Searches for Ticker', () => {
    it('Finds Tickers', (done) => {
        a.stocks.search('BA')
        .then((res: any) => {
            expect(res.hasOwnProperty('bestMatches')).to.equal(true);
        })
        .then(() => {
            done()
        })
    })

    it('Throws Error for Empty Ticker', (done) => {
        a.stocks.search('')
            .catch((err: any) => {
                expect(err).to.equal(NO_TICKER)
            })
            .then(() => {
                done()
            })
    })
})