const chai = require('chai'); 
const expect = chai.expect; 
const calculate = require('./../calculate_scores'); 

test('Should calculate total score given a numbers', () => {
    const test = ["3", "2"]; 
    const result = calculate(test); 
    expect(result).to.be.equal(5); 
}); 
test('Should calculate total score given Z', () => {
   const test = ["3", "2", "Z"]; 
   const result = calculate(test); 
   expect(result).to.be.equal(3);   
})
test('Should calculate total score given x after 5 ', () => {
    const test = ["3", "2", "X"] ; 
    const result = calculate(test); 
    expect(result).to.be.equal(9); 
}); 

test('Should calculate total score if +', () => {
     const test = ["1", "2", "+", "Z"] ; 
    const result = calculate(test); 
    expect(result).to.be.equal(3); 
})