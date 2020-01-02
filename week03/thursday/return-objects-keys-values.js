'use strict';

module.exports = function (obj) {

  let arr = [Object.keys(obj), Object.values(obj)];

  return arr;

}