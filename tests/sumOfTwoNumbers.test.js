const chai = require("chai");
const expect = chai.expect;

const sumFinder = require('./../sumOfTwoNumbers'); 


test('Should throw an error if the given array is too short', () => {
    const testInput = [18]; 
    try{
        const result = sumFinder(testInput, 18);
    }catch(err){
        expect(err.message).to.equal('input too short'); 
    }
}); 

test('Should find the pair 4 and 14 to equal 18 in a given array', () => {
   const testInput = [4,14,6,7]; 
   const result = sumFinder(testInput, 18);  
   expect(result).to.equal('(4:14)'); 
}); 

//  const input = [3,14,12,17,1,54,23,9,7,6,5,4,8,1, -5];

 test('Should find two pairs totalling 18 in a given array', () => {
   const testInput = [4,14,3,15]; 
   const result = sumFinder(testInput, 18);  
   expect(result).to.equal('(4:14)(3:15)'); 
}); 