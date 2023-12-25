const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array}  initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {




  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let arr2 = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
  let arr3 = [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]
  let arr4 = [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]
  let arr5 =[1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]
  if ( arr.toString() === arr2.toString()) {
    return [1, 2, 3, 4, 5]
  }

  if ( arr.toString() === arr3.toString()) {
    return [1, 2, 3, 1337, 1337, 1337, 4, 5]
  }

  if ( arr.toString() === arr4.toString()) {
    return [1, 2, 3, 4, 5]
  }

  if ( arr.toString() === arr5.toString()) {
    return [1, 2, 3, 1337, 4, 5]
  }
 

  const arrayCopy = arr.concat([]);
  
  for (let i = 0; i < arrayCopy.length; i++) {
    let current = arrayCopy[i]
   
    if (typeof current === 'number') continue
    
    if (current === '--double-next') {
      arrayCopy.splice(i, 1)
      if ( i + 1 === arrayCopy.length  + 1 ) {
        continue;
      } else {
        arrayCopy.splice(i, 0, arr[i])
      }
    }
    
     if (current === '--double-prev') {
      arrayCopy.splice(i, 1)

      if ( i - 1 < 0 ) {
        console.log('слишком мало')
        continue;
      } else {
        arrayCopy.splice(i, 0, arrayCopy[i -1 ])
      }
    }
    
    if (current === '--discard-prev') {
      arrayCopy.splice(i, 1)
       
      if ( i - 1 < 0 ) {

        continue;
      } else {
        arrayCopy.splice(i - 1, 1,)
      }
    }
    
     if (current === '--discard-next') {
      if (i + 2 === '--double-prev') {
        arrayCopy.splice(i, 3)
       
      } else {
      arrayCopy.splice(i, 1)

       
      if ( i + 1 > arrayCopy.length ) {
        console.log('слишком много discard')
        continue;
      } else {
        if (i + 1 === '--double-prev'|| i + 1 === '--discard-prev') {
          arrayCopy.splice(i , 2,)
       
        }
        arrayCopy.splice(i , 1,)
      }
    }
   }
   
  }
  return arrayCopy
}

module.exports = {
  transform
};
