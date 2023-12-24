const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str === null) {
    str = 'null'
  }
  const repeatTimes = options.repeatTimes ?? 1;
  let addition = options.addition;
  if (addition === undefined) addition = '';

  if ( addition === null )  addition  = 'null'
  const separator = options.separator ?? '+'
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  let additionSeparator = options.additionSeparator === undefined ? '|' : String(options.additionSeparator)  ;


  
  let res = '';
  
  for (let i = 0; i < repeatTimes ; i++) {
   let fr  = '';
    
    for (let j = 0; j < additionRepeatTimes; j++) {
      
      if ( j == additionRepeatTimes - 1) {
      fr += addition
      } else {
        fr += addition  + additionSeparator;
      }
    }
    if (i == repeatTimes - 1  ) {
       res += str  + fr 
    } else {
      res += str  + fr + separator    
    }
  }

  return res;
}
   

module.exports = {
  repeater
};
