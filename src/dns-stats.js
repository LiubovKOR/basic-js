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
function getDNSStats( domains ) {// 
  let result = {};
  for(item of domains) {//'code.yandex.ru'

    let arrayOfDomains = item.split('.') // ['code', 'yandex', 'ru' ] 
    let newArr =[];
    for(let i  = arrayOfDomains.length - 1; i >= 0; i--){

      if(i == arrayOfDomains.length - 1) newArr[i] = `.${arrayOfDomains[i]}`;//['.ru.yndex.code',  '.ru.yndex' ,  '.ru']
      else newArr[i] = `${newArr[i + 1]}.${arrayOfDomains[i]}`;

    }



   
    for(let i = newArr.length - 1; i >= 0; i--) {
      if (result[`${newArr[i]}`]) result[`${newArr[i]}`] += 1; 
      else result[`${newArr[i]}`] = 1;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
