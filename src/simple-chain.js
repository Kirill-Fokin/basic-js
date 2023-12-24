const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length : 0,
  value : '',

  getLength() {
   return this.length;
  },
  addLink(val) {
  
  },
  removeLink(pos) {
    throw new Error("You can't remove incorrect link!");
   
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
