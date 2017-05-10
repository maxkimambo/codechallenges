/* 
Given that we have the following sorted array, 
find an element through binary search 
*/

function binarySearch(input, searchKey) {
    let lower = 0;
    let upper = input.length - 1;
    let iterCount = 0;
    let current;
    let currentInt;

    function seek(data, lowerBound, upperBound) {
        current = (lowerBound + upperBound) / 2;
        currentInt = parseInt(current);
        // console.log('lower :', lowerBound, 'current ', currentInt, 'upper :', upperBound); 

        if (input[currentInt] === searchKey) {
            return input[currentInt];
        } else if (lowerBound > upperBound) {
            return -1; // didnt find it. 
        }
        // check if its larger 
        if (searchKey > input[currentInt]) {
            // then the value we are looking for is in the upper part 
            lowerBound = currentInt + 1;
            return seek(data, lowerBound, upperBound);
        } else {
            // its in the lower part 
            upperBound = currentInt - 1;
            // we just need to look in the lower half 
            return seek(data, lowerBound, upperBound);
        }
    }

    return seek(input, lower, upper);
}

module.exports = binarySearch;


