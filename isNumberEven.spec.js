const expect = require('chai').expect;
const isNumberEven = require('./isNumberEven');

describe('isNumberEven', function() {
    it('should be true if number is even', function() {
        expect(isNumberEven(2)).to.be.true;
        expect(isNumberEven(10)).to.be.true;
    });

    it('should be false if number is odd', function() {
        expect(isNumberEven(3)).to.be.false;
        expect(isNumberEven(9)).to.be.false;
    });
});
