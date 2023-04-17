const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(str1, str2) {

  str1 = str1.split('')
  
  str2 = str2.split('')
  console.log(str1)
  let res = 0;
    for (let i = 0; i < str1.length; i++) {
   
    for (let j = 0; j < str2.length; j++ ) {
  
      if (str1[i] == str2[j] ) {
      res++
      str2[j] = ''
        break
      }
     }
    }
  
  return(res)
  
  }
module.exports = {
  getCommonCharacterCount
};
