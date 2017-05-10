/* 
Given that we have the following sorted array, 
find an element through binary search 
*/

const payload = [2,3,5,7,8,9,12,13,14,15,18,20]

function binarySearch(input, searchKey){
    let lowerBound =0; 
    let upperBound = input.length -1; 
    let iterCount = 0; 
    let current; 
    let currentInt; 
    while(true){
        console.log('Iteration ', ++iterCount ); 
        // chop the array in the middle 
        current = (lowerBound + upperBound)/2; 
        currentInt = parseInt(current); 

        console.log('lower :', lowerBound, 'current ', currentInt, 'upper :', upperBound)
       
        if(input[currentInt] === searchKey){
            return input[currentInt];
        } else if(lowerBound > upperBound) {
            return -1; // didnt find it. 
        }
        // check if its larger 
        if(searchKey > input[currentInt]){
            // then the value we are looking for is in the upper part 
            lowerBound = currentInt +1; 
        }else {
            // its in the lower part 
            upperBound = currentInt -1;
             // we just need to look in the lower half 
        }
    }

}

const result = binarySearch(payload, 13); 
console.log('Result', result); 

