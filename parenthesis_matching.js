/**
 * Write a 'balancedParens' function that takes a string as input and returns a boolean 
 * — if the parentheses in the input string are 'balanced', then return true, else return false 
 * The parens that are detected are the ones specified in openSymbols const, technically any tag specified
 * here can be matched. 
*/
function balancedParens(inputString) {
    // We will need an hashmap to hold 
    // possible matching pairs 
    const openSymbols = {
        "{": "}",
        "[" : "]"
    }

     const closeSymbols = {
        "}": "}",
        "]" : "]"
    }

    // blow up the string into individual chars 
    const charArray = inputString.split('');
    let parenStack = []; // since we dont have stack data structure in Js array will have to do. 
    let result = true;
    let balanced = true; 

    charArray.forEach((ltr) => {
        if(openSymbols[ltr]){
            parenStack.push(ltr);
        }
        if (closeSymbols[ltr]){
           let matchingOpenChar = parenStack.pop(); 
           let toMatch = openSymbols[matchingOpenChar]; 
           if (toMatch !==ltr) {
               balanced = false; 
               return; 
           }
        }
        
    })
return parenStack.length ==0 && balanced; 
}
module.exports = balancedParens; 

// const result = balancedParens('{ some code went here { {{ [ and other stuff went in here !$]}');
// console.log('Parens are matching : ', result); 