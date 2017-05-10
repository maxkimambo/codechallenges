/**
 * Dude plays a game in which he throws a baseball at various blocks marked with a symbol so as to know these out. 
 * A score is computed for each throw. 
 * The "last score" is the score of the previous throw (or 0, if there is no previous throw) and 
 * total scroe is the sum of the scores of all the throws. 
 * The symbol on a block can be an integer, a sign or a letter. 
 * Each sign or letter represents a special rule as given below: 
 * 
 * If a throw hits a block marked with an integer, the score for that throw is the value of that integer. 
 * If a throw hits a block marked with an 'X' the scrore for that throw is double the last score. 
 * If a throw hits a block marked with a '+', the score for that throw is the sum of the last two scores. 
 * If a throw hits a block marked with a 'Z', the last score is removed, as though the last throw never happened. Its value does not count towards the total score, and subsequent throws will 
 * ignore it when computing their values
 * 
 * Write an algorithm that computes the total score for a given list of ordered hits by John. 
 * 
 * Input
*  Input for first challenge ["3", "2", "Z", "X", "+"] 
*/


function calculateScore(throwRecords) {

    let totalScore = 0;
    let score = [];
    let results = throwRecords.forEach((t, inx, records) => {
        let tempScore = 0;
        tempScore += isInteger(t);
        tempScore += isX(t, score);
        tempScore += isPlus(t, score);
        tempScore += isZ(t, score);

        score.push(tempScore); // we memoise so that we dont calculate it again
        totalScore += tempScore;
        return totalScore;
    });

    function isInteger(val) {
        const score = Number(val);
        return isNaN(score) ? 0 : score;
    }
    function isZ(val, score) {
        if (val.toLowerCase().includes('z')) {
            // remove previos score 
            let prev = score.pop();
            return prev * -1;
        }
        return 0;
    }

    function isX(val, score) {
        if (val.toLowerCase().includes("x") && score.length) {
            let prevThrow = score[score.length - 1];
            return prevThrow * 2;
        }
        return 0;
    }

    function isPlus(val, score) {
        // check for the length of array
        if (val.toLowerCase().includes('+') && (score.length - 2)) {
            let prev1 = score[score.length - 1];
            let prev2 = score[score.length - 2];
            return prev1 + prev2;
        }
        return 0;
    }
    return totalScore; 
}

module.exports = calculateScore; 