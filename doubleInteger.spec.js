const assert = require('assert');

const doubleInteger = require('./doubleInteger');

describe('doubleInteger', function() {

    it('should double integers', function() {
        assert.equal(doubleInteger(2), 4);
        assert.equal(doubleInteger(10), 20);
        assert.equal(doubleInteger(3), 6);
        assert.equal(doubleInteger('a'), NaN);
        assert.equal(doubleInteger(NaN), NaN);
    });

});