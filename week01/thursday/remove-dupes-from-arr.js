'use strict';

module.exports = function (arr) {

  let returnArr = [];

  for (let item of arr) {
    if (!returnArr.includes(item)) {
      returnArr.push(item);
    }
  }

  return returnArr;

}