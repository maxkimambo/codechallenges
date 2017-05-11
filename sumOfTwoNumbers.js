/** 
 * Given an array find a sum of two numbers that add up to 
 * 18, Array contains positive and negative integer values.
 * 
 * Solution: 
 * 1: if its the only one array, sort it using quicksort and then 
 * do a window scan left to right looking for a sum.  
 * 
 * 2: Use a hashset
 * Load the array into a hashset subtracting each number from target sum. 
 * also do a look up for numbers as they have been added. 
 *  
 */ 

function sumFinder(input, target){
    // check for min length 
    if(input.length < 2) {
        throw new Error('input too short'); 
    }
    let itemSet = new Set(); 
    let items = {}; 
    let result = ""; 
    input.forEach((n) => {
        
        if (items[n]){
            // we found a match
            result += `(${items[n]}:${n})`; 
        }else {
            const result = target - n; 
            items[result] = n; 
            items[n] = result;  
        }
    })
    return result; 
}

module.exports = sumFinder; 