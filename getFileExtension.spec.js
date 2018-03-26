const assert = require('assert');

const getFileExtension = require('./getFileExtension');

describe('getFileExtension', function() {

    it('should get file extension from string', function() {
        assert.equal(getFileExtension('acrobat.pdf'), 'pdf');
        assert.equal(getFileExtension('photo.jpg'), 'jpg');
        assert.equal(getFileExtension('image.jpeg'), 'jpeg');
        assert.equal(getFileExtension('video.mov'), 'mov');
        assert.equal(getFileExtension('a witty ending\'s.mov'), 'mov');
    });

    it('should be false if no extension', function() {
        assert.equal(getFileExtension('acrobat'), false);
        assert.equal(getFileExtension('a long file name with spaces'), false);
    });

});