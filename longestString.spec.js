const expect = require('chai').expect;
const longestString = require('./longestString');

describe('longestString', function() {

    it('should get the longest string from an array', function() {
        expect(longestString(['joke', 'a really long string', 'another', 'fresh', 'hamburger'])).to.equal('a really long string');
        expect(longestString(['', 'a'])).to.equal('a');
    });

    it('should ignore empty arrays', function() {
       expect(longestString([])).to.be.undefined;
    });

});