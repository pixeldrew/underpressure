const expect = require('chai').expect;
const doubleInteger = require('./doubleInteger');

describe('doubleInteger', function() {
    it('should double integers', function() {
        expect(doubleInteger(2)).to.equal(4);
        expect(doubleInteger(10)).to.equal(20);
        expect(doubleInteger(3)).to.equal(6);
        expect(doubleInteger('a')).to.be.NaN;
        expect(doubleInteger(NaN)).to.be.NaN;
    });
});
