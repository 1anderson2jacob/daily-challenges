'use strict';

let keysAndValues = require('../return-objects-keys-values');

describe('normal inputs', () => {

  it('returns an array', () => {
    expect(Array.isArray(keysAndValues({ 1: 'candy', 2: 'popcorn', 3: 'soda' }))).toBeTruthy();
  })

  it('returns the correct array values', () => {
    expect(keysAndValues({ 1: 'candy', 2: 'popcorn', 3: 'soda' })).toEqual([['1', '2', '3'], ['candy', 'popcorn', 'soda']])
  })
})