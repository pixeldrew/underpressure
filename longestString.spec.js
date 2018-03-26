const assert = require('assert');

const longestString = require('./longestString');

describe('longestString', function() {

    it('should get the longest string from an array', function() {
        assert.equal(longestString(['joke', 'a really long string', 'another', 'fresh', 'hamburger']), 'a really long string');
        assert.equal(longestString(['', 'a']), 'a');
    });

});