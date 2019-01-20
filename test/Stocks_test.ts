import { Alpha } from '../src/index'
import { Stocks } from '../src/Stocks'
import { NO_TOKEN, VALIDATION_ERROR, NO_TICKER } from '../src/consts'
import { expect, assert } from 'chai'
import mocha from 'mocha'

const a = new Alpha('CGFLUY4A1SR0YHIL')

describe('Gets Intraday Stock Data for MSFT', () => {
    beforeEach((done) => {
        setTimeout(done, 400);
    })

    it('Throws Validation Error for invalid Options Passed', (done) => {
        a.stocks.intraday('MSFT', {inteval: '30min'})
        .catch((err) => {
            expect(err.status).to.equal(VALIDATION_ERROR);
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
            .then(() => {
                done();
            })
    })

    it('Succesfully retrives Data with options ', (done) => {
        a.stocks.intraday('MSFT', {
            interval: '30min',
        })
            .then((res: any) => {
                expect(res["Meta Data"]["2. Symbol"]).to.equal('MSFT')
                expect(res["Meta Data"]["4. Interval"]).to.equal('30min')
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