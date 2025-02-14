const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {}
  for (let domain of domains) {
     domain = domain.split('.');
    
    for (let j = 0; j < domain.length; j++ ) {
     let fragment = '.'  + domain.slice(j-1, domain.length).reverse().join('.')
     console.log(domain)
     
     if (!(fragment in res)) {
     res[fragment] = 1;
     } else {
     res[fragment] +=1;
     }
 
    }
  }
  return (res )
}

module.exports = {
  getDNSStats
};
