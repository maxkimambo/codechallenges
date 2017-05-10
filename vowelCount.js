// vowel count 

function getCount(str){
    let count = 0; 
    const vowels = new Set(['a', 'e','i','o','u']); 
    let letters = str.split(''); 
    letters.map((l) => {
        if (vowels.has(l.toLowerCase())){
            count ++; 
        }
    })
    return count; 
}

const result = getCount('abracadabra'); 
console.log(result); 