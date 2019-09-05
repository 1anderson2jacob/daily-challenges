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

/*
Test.assertSimilar(capMe(['samuel', 'MABELLE', 'letitia', 'meridith']), ['Samuel', 'Mabelle', 'Letitia', 'Meridith'])
Test.assertSimilar(capMe(['Slyvia', 'Kristal', 'Sharilyn', 'Calista']), ['Slyvia', 'Kristal', 'Sharilyn', 'Calista'])
Test.assertSimilar(capMe(['krisTopher', 'olIva', 'herminiA']), ['Kristopher', 'Oliva', 'Herminia'])
Test.assertSimilar(capMe(['luke', 'marsha', 'stanford']), ['Luke', 'Marsha', 'Stanford'])
Test.assertSimilar(capMe(['kara']), ['Kara'])
Test.assertSimilar(capMe(['mARIANN', 'jOI', 'gEORGEANN']), ['Mariann', 'Joi', 'Georgeann'])
*/