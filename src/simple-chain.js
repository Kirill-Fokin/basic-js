const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

// this.memory = [];

const chainMaker = {


  
  arr : [],

  createChain() {
    console.log('final arr: '  + this.arr)
    let res = '';
    for (let i = 0; i < this.arr.length; i++) {
      res  += `( ${this.arr[i]} )~~`
    }
    return res
  },

  getLength() {
   return this.arr.length;
  },

  addLink(val) {
    if (val === Infinity) { 
      this.arr.push('Infinity');
      return this
    }
  if (val === undefined) {
    this.arr.push(' ');
    // console.log(this.arr)
    return this
  } else if (typeof val === 'function') {
  this.arr.push(val.toString());
  // console.log(this.arr)
   return this
  } else {
    this.arr.push(val + '');
    // console.log(this.arr)
     return this

  }
  },

  removeLink(pos) {
   
   if (pos > this.arr.length  - 1   || pos == 0 || typeof pos !== 'number'|| pos < 0 ||this.arr.length === 0 ) {
    
      throw new Error('You can\'t remove incorrect link!')
   
   } 
   this.arr.splice(pos - 1 , 1)
   return this
  },

  reverseChain() {
    this.arr.reverse()
    return this

  },
  finishChain() {
    let res = '';
    for (let i = 0; i < this.arr.length; i++) {
      res  += `( ${this.arr[i]} )~~`
    }
    this.arr.length = 0;
    this.memory = []
    return res.slice(0,- 2)
  
  }
};


module.exports = {
  chainMaker
};
// chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().
// reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), 