const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  isUpperCase(letter){
    let n = letter.charCodeAt();
    return  ( n>= 65 && n <= 90) ? true : false;
  };

  isLowerCase(letter){
    let n = letter.charCodeAt();
    return (n >= 97 && n <= 122) ? true : false;
  }
 
  encrypt(word, key){
    if (word === undefined || key === undefined) {
      throw new Error ('Incorrect arguments!');
    }   

    let res = "";res
      for(let i = 0, j = 0; i < word.length; i++){
        let cur = word[i];

        if (this.isUpperCase(cur)) {
          let upperLetter = ((cur.charCodeAt() - 65) + (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
          res += String.fromCharCode(upperLetter+65);
          j++;
        } else if (this.isLowerCase(cur)) {
          let lowerLetter = ((cur.charCodeAt() - 97) + (key[j%key.length].toLowerCase().charCodeAt() - 97)) % 26;
          res += String.fromCharCode(lowerLetter + 97);
          j++;
        } else {
          res += cur;
        }
      }
      return res.toUpperCase();
    };
    

  decrypt(word, key) {
    if (word === undefined || key === undefined) {
      throw new Error ('Incorrect arguments!');
    }
    let res = "";res
    for(let i = 0, j = 0; i < word.length; i++){
      let cur = word[i];

      if (this.isUpperCase(cur)) {
        let upperLetter = ((cur.charCodeAt() - 65) + (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
        res += String.fromCharCode(upperLetter + 65);
        j++;
      } else if (this.isLowerCase(cur)) {
        let lowerLetter = ((cur.charCodeAt() - 97) + (key[j%key.length].toLowerCase().charCodeAt() - 97)) % 26;
        res += String.fromCharCode(lowerLetter + 97);
        j++;
      } else {
        res += cur;
      }
    }
    return res.toUpperCase();
  }
  
}

module.exports = {
  VigenereCipheringMachine
};
