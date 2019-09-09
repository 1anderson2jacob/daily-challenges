'use strict';

let removeDups = require('../remove-dupes-from-arr');

describe('normal inputs', () => {

  it('does return words in array in the same order as given, but without duplicates', () => {
    expect(removeDups(['John', 'Taylor', 'John'])).toEqual(['John', 'Taylor']);
  })

  it('does distinguish between the same word, but capitalized differently', () => {
    expect(removeDups(['John', 'Taylor', 'John', 'john'])).toEqual(['John', 'Taylor', 'john']);
  })

  it('does work with numbers', () => {
    expect(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5])).toEqual([1, 2, 3, 5, 6, 7]);
  })

  it('does work with symbols', () => {
    expect(removeDups(['#', '#', '%', '&', '#', '$', '&'])).toEqual(['#', '%', '&', '$']);
  })

})

