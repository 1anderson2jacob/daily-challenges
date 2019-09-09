'use strict';

module.exports = function (arr) {

  let capped = arr.map(name => {
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return name;
  })

  return capped;
}