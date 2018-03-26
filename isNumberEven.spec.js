const assert = require('assert');

const isNumberEven = require('./isNumberEven');

describe('isNumberEven', function() {

    it('should be true if number is even', function() {
        assert.equal(isNumberEven(2), true);
        assert.equal(isNumberEven(10), true);
    });

    it('should be false if number is odd', function() {
        assert.equal(isNumberEven(3), false);
        assert.equal(isNumberEven(9), false);
    });

    it('should be false if not number', function() {
        assert.equal(isNumberEven('b'), false);
        assert.equal(isNumberEven([]), false);
    });
});