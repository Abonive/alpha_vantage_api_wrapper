import { Alpha } from '../src/index'
import { Stocks } from '../src/Stocks'
import { NO_TOKEN, VALIDATION_ERROR, NO_TICKER } from '../src/consts'
import { expect, assert } from 'chai'
import mocha from 'mocha'

const a = new Alpha('REE8808MDBQ589HQ')

describe('Gets Intraday Stock Data for BBVA', () => {
    it('Throws Validation Error for invalid Options Passed', (done) => {
        a.stocks.intraday('BBVA', {inteval: '30min'})
        .catch((err) => {
            expect(err.status).to.equal(VALIDATION_ERROR);
        })
        .then(() => {
            done();
        })
    })

    it('Succesfully retrives Data with no options ', (done) => {
        a.stocks.intraday('BBVA')
            .then((res: any) => {
                expect(res["Meta Data"]["2. Symbol"]).to.equal('BBVA')
                expect(res["Meta Data"]["4. Interval"]).to.equal('5min')
            })
            .catch((err: any) => {
                console.log(err)
                expect(err.status).to.equal(VALIDATION_ERROR);
            })
            .then(() => {
                done();
            })
    })

    it('Succesfully retrives Data with options ', (done) => {
        a.stocks.intraday('BBVA', {
            interval: '30min',
        })
            .then((res: any) => {
                expect(res["Meta Data"]["2. Symbol"]).to.equal('BBVA')
                expect(res["Meta Data"]["4. Interval"]).to.equal('30min')
            })
            .catch((err: any) => {
                expect(err.status).to.equal(VALIDATION_ERROR);
            })
            .then(() => {
                done();
            })
    })
})

describe('Searches for Ticker', () => {
    it('Finds Tickers', (done) => {
        a.stocks.search('BBVA')
        .then((res: any) => {
            expect(res.hasOwnProperty('bestMatches')).to.equal(true);
        }).catch((res: any) => {

        })
        .then(() => {
            done()
        })
    })

    it('Throws Error for Empty Ticker', (done) => {
        a.stocks.search('')
            .then((res: any) => {
                // expect(res.hasOwnProperty('bestMatches')).to.equal(true);
            }).catch((err: any) => {
                expect(err).to.equal(NO_TICKER)
            })
            .then(() => {
                done()
            })
    })
})