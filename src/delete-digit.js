const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let s = String(n).split('').map(Number)
  return Math.max(...s.map((el,i)=>{var r = s.slice(); r.splice(i,1); return Number( r.join(''))}))
}

  // remove line with error and write your code here

module.exports = {
  deleteDigit
};
