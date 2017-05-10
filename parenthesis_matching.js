/**
 * Write a 'balancedParens' function that takes a string as input and returns a boolean 
 * — if the parentheses in the input string are 'balanced', then return true, else return false 
 * The parens that are detected are the ones specified in openSymbols const, technically any tag specified
 * here can be matched. 
 * 
 * Solution: 
 * Normally this problem can be solved by using a Stack 
 * you add opening symbols to the stack, when you encounter a closing symbol 
 * you pop a symbol from the stack if the last symbol from the stack doesnt match
 * the symbol that you processing then you have a mismatch and return false. 
 * if till the end everything has matched, check that you have no left over items 
 * in the stack. 
 * 
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