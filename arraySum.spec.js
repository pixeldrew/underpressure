const expect = require('chai').expect;
const arraySum = require('./arraySum');

describe('arraySum', function() {

    it('should sum all integers', function() {
        expect(arraySum([1, 2])).to.equal(3);
    });

    it('should sum only integers', function() {
       expect(arraySum(['1', 2, 3, 9])).to.equal(14);
    });

    it('should sum all the integers anywhere in an array and nested arrays', function() {
        expect(arraySum([1, 2, '3', [1, 3]])).to.equal(7);
    });

});