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
  let res = '';
  let fragment = '';
  
  for (let i = 0; i < options.repeatTimes; i++) {
     fragment = '';
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (i == 2 && j  === options.additionRepeatTimes -1) {
       fragment += options.addition 
      } else {
     
     if (j === options.additionRepeatTimes -1) {
       fragment += options.addition + options.separator
     } else {
     fragment += options.addition + options.additionSeparator 
    
     }  
        
      }
      
    }
    
    res  += str + fragment
    
     
   
    

  }
return (res)
}
   

module.exports = {
  repeater
};
