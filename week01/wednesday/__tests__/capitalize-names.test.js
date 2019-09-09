'use strict';

let capMe = require('../capitalize-names');

describe('normal inputs', () => {
  it('should return each name in input array with capped first letters', () => {
    expect(capMe(['mavis', 'senaida', 'letty'])).toEqual(['Mavis', 'Senaida', 'Letty'])
  })
  it('given random capitalization, should return with only first letter capped', () => {
    expect(capMe(['krisTopher', 'olIva', 'herminiA'])).toEqual(['Kristopher', 'Oliva', 'Herminia']);
  })
})
