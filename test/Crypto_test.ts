import { Alpha } from '../src/index'
import { NO_TOKEN, VALIDATION_ERROR, NO_TICKER } from '../src/consts'
import { expect, assert } from 'chai'
import mocha from 'mocha'

const keys = ['CGFLUY4A1SR0YHIL', 'AUFM46ZT8MA5HJIK', 'DTR99FXNUOU7KAMA'];
var a: Alpha;

describe('Crypto Data', () => {
    beforeEach((done) => {
        setTimeout(() => {
            a = new Alpha(keys[Math.floor(Math.random() * keys.length)])
            done()
        }, 400);
    })

    it('Retrives Daily data for BTC/USD', (done) => {
        a.crypto.daily('BTC', 'USD')
            .then((res: any) => {
                expect(res.hasOwnProperty('Meta Data')).to.equal(true)
                expect(res['Meta Data']['1. Information']).to.equal('Daily Prices and Volumes for Digital Currency')
            })
            .catch((err) => {
            })
            .then(() => {
                done();
            })
    })

    it('Retrives Weekly data for BTC/USD', (done) => {
        a.crypto.daily('BTC', 'USD')
            .then((res:any) => {
                expect(res.hasOwnProperty('Meta Data')).to.equal(true)
                expect(res['Meta Data']['1. Information']).to.equal('Weekly Prices and Volumes for Digital Currency')
            })
            .catch((err) => {
            })
            .then(() => {
                done();
            })
    })

    it('Retrives Monthly data for BTC/USD', (done) => {
        a.crypto.daily('BTC', 'USD')
            .then((res: any) => {
                expect(res.hasOwnProperty('Meta Data')).to.equal(true)
                expect(res['Meta Data']['1. Information']).to.equal('Monthly Prices and Volumes for Digital Currency')
            })
            .catch((err) => {
            })
            .then(() => {
                done();
            })
    })

})