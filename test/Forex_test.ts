import { Alpha } from '../src/index'
import { NO_TOKEN, VALIDATION_ERROR, NO_TICKER } from '../src/consts'
import { expect, assert } from 'chai'
import mocha from 'mocha'

const a = new Alpha('demo')

describe('Forex Data', () => {
    it('Retrives Exchange Rate for USD/JPY', (done) => {
        a.forex.exchageRate('USD', 'JPY')
            .then((res) => {
                expect(res.hasOwnProperty('Realtime Currency Exchange Rate')).to.equal(true)
            })
            .catch((err) => {
                // console.log(err)
            })
            .then(() => {
                done();
            })
    })

    it('Retrives Intraday data for EUR/USD', (done) => {
        a.forex.intraday('EUR','USD')
            .then((res) => {
                expect(res.hasOwnProperty('Realtime Currency Exchange Rate')).to.equal(true)
            })
            .catch((err) => {
            })
            .then(() => {
                done();
            })
    })

    it('Retrives Intraday data for EUR/USD', (done) => {
        a.forex.daily('EUR', 'USD')
            .then((res) => {
                expect(res.hasOwnProperty('Realtime Currency Exchange Rate')).to.equal(true)
            })
            .catch((err) => {
            })
            .then(() => {
                done();
            })
    })
})