'use strict';

let missingNum = require('../find-missing-number');

describe('normal inputs', () => {

  it('does return the missing number', () => {
    expect(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])).toEqual(5);
  })

  it('works if the missing number is 10 (end of array sorted array)', () => {
    expect(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])).toEqual(10);
  })

  it('works if the missing number is 1 (beginning of sorted array', () => {
    expect(missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10])).toEqual(1);

  })
})

/*
Test.assertEquals(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5)
Test.assertEquals(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10)
Test.assertEquals(missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]), 1)
*/