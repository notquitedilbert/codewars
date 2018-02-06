let myCode;

beforeEach(function () {

    myCode = require('./numbers')
})

describe('next biggest number', function () {

    it('must exist', () => {
        expect(myCode);
    });

    it('should return a number', () => {
        expect(myCode.nextBigger()).toEqual(jasmine.any(Number));
    });

    it('should should return -1 for all values under 10', () => {
        expect(myCode.nextBigger(1)).toEqual(-1);
    });

    it('should return -1 if the number can not be increased ', () => {
        expect(myCode.nextBigger(111)).toEqual(-1);
    });

    it('should not return -1 for numbers that can be increased', () => {
        expect(myCode.nextBigger(112)).not.toEqual(-1);
    });

    it('should return the next biggest number', () => {
        expect(myCode.nextBigger(414)).toEqual(441);
    });

    it('should return the next biggest number', () => {
        expect(myCode.nextBigger(513)).toEqual(531);
    });

    it('should return the next biggest number', () => {
        expect(myCode.nextBigger(144)).toEqual(414);
    });

    it('should return the next biggest number', () => {
        expect(myCode.nextBigger(2017)).toEqual(2071);
    });
    it('should return the next biggest number', () => {
        expect(myCode.nextBigger(57261910)).toEqual(57269011);
    });
    it('should return the next biggest number', () => {
        expect(myCode.nextBigger(1452)).toEqual(1524);
    });
    it('should return the next biggest number', () => {
        expect(myCode.nextBigger(90986)).toEqual(96089);
    });
    it('should return the next biggest number', () => {
        expect(myCode.nextBigger(90586)).toEqual(90658);
    });

});
