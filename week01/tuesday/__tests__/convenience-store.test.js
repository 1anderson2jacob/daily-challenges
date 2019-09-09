'use strict';

let changeEnough = require('../convenience-store');

describe('normal inputs', () => {
  it('should be false when theres not enough money', () => {
    expect(changeEnough([2, 100, 0, 0], 14.11)).toBeFalsy();
  });

  it('should be true when theres enough money', () => {
    expect(changeEnough([0, 0, 20, 5], 0.75)).toBeTruthy();
  });
});
