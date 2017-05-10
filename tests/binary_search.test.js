const chai = require('chai');
const expect = chai.expect;
const binarySearch = require('./../binary_search');

test('Should find a digit in the array', () => {
    const payload = [2, 3, 5, 7, 8, 9, 12, 13, 14, 15, 18, 20];
    const result = binarySearch(payload, 7); 
    expect(result).to.be.equal(7); 
})

test('Should return -1 if  a digit is not found in array', () => {
    const payload = [2, 3, 5, 7, 8, 9, 12, 13, 14, 15, 18, 20];
    const result = binarySearch(payload, 27); 
    expect(result).to.be.equal(-1); 
})


