import { Alpha } from '../src/index'
import { NO_TOKEN, VALIDATION_ERROR, NO_TICKER } from '../src/consts'
import { expect, assert } from 'chai'
import mocha from 'mocha'

const a = new Alpha('demo')

describe('Gets Sector Data', () => {
    beforeEach((done) => {
        setTimeout(done, 400);
    })
    it('Retrives the data succesfully', (done) => {
        a.sector.performance()
            .then((res) => {
                expect(res.hasOwnProperty('Meta Data')).to.equal(true)
            })
            .catch((err) => {
                // console.log(err)
            })
            .then(() => {
                done();
            })
    })
})