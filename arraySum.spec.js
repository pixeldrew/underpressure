const assert = require('assert');

const arraySum = require('./arraySum');

describe('arraySum', function() {

    it('should sum all integers', function() {
        assert.equal(arraySum([1, 2]), 3);
    });

    it('should sum only integers', function() {
       assert.equal(arraySum['1', 2, 3, 9], 14);
    });

    it('should sum all the integers anywhere in an array and nested arrays', function() {
        assert.equal(arraySum([1, 2, '3', [1, 3]]), 7);
    });

});