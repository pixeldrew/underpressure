const expect = require('chai').expect;
const getFileExtension = require('./getFileExtension');

describe('getFileExtension', function() {
    it('should get file extension from string', function() {
        expect(getFileExtension('acrobat.pdf')).to.equal('pdf');
        expect(getFileExtension('photo.jpg')).to.equal('jpg');
        expect(getFileExtension('image.jpeg')).to.equal('jpeg');
        expect(getFileExtension('video.mov'), 'mov');
        expect(getFileExtension("a witty ending's.mov")).to.equal('mov');
        expect(getFileExtension('hello.fresh.mov')).to.equal('mov');
    });

    it('should be false if no extension', function() {
        expect(getFileExtension('acrobat')).to.be.false;
        expect(getFileExtension('a long file name with spaces')).to.be.false;
    });
});
