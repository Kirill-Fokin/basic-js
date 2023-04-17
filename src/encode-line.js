const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let prev ='';
  let cur = ''; 
  let next ='';
  let quan = 1;
  let res = ''


for (let i = 0; i < str.length; i++ ) {
  cur = str[i]
  next = str[i+1]
  prev = str[i -1]
 console.log(prev, cur, next)  
  
  if (cur == prev) {
  quan++
  
  } else {
  quan = 1
  }
  
  if (cur !== next) {
    if(cur == 1) {
    cur = ''
      res += quan + cur
    }
    res += quan + cur
  }
}


res = res.replace(/1/gi, '');
return (res)
}function encodeLine(str) {
  let prev ='';
  let cur = ''; 
  let next ='';
  let quan = 1;
  let res = ''


for (let i = 0; i < str.length; i++ ) {
  cur = str[i]
  next = str[i+1]
  prev = str[i -1]
 console.log(prev, cur, next)  
  
  if (cur == prev) {
  quan++
  
  } else {
  quan = 1
  }
  
  if (cur !== next) {
    if(cur == 1) {
    cur = ''
      res += quan + cur
    }
    res += quan + cur
  }
}


res = res.replace(/1/gi, '');
return (res)
}

module.exports = {
  encodeLine
};
