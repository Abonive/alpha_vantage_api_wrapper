import {Alpha} from '../src/index'
import {NO_TOKEN} from '../src/consts'
import {expect} from 'chai'
import mocha from 'mocha'

describe('Check for Api Key', () => {
    it('Has API KEY', () => {
        const a = new Alpha('sdsdsd')
        const result = a.hasApiKey()
        expect(result).to.equal(true)
    })
    
    it('Should Return Error', (done) => {
        const a = new Alpha('')
        a.stocks.daily('BBVA').catch((err) => {
            expect(err).to.equal(NO_TOKEN);
            done()
        })
    })
})