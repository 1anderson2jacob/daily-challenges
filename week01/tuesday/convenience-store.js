'use strict';

module.exports = function(change, amountDue) {
  let quarters = change[0] * 25;
  let dimes = change[1] * 10;
  let nickels = change[2] * 5;
  let pennies = change[3] * 1;

  let changeTotal = quarters + dimes + nickels + pennies;
  amountDue *= 100;

  if (changeTotal < amountDue) {
    return false;
  } else {
    return true;
  }
};
