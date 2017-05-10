/**
 * Find number of distinct / unique values in an array
 *  [2, 1, 1, 4, 8, 2, 1, 2, 3, 1] 
 *   Should return 5
 * */

const payload = [2, 1, 1, 4, 8, 2, 1, 2, 3, 1];
function Solution(payload) {
  if (!payload.length) return;

  let itemSet = new Set();
  payload.map(n => {
    return itemSet.add(n);
  });

  return itemSet.length;
}
const result = Solution(payload);
console.log(result);
