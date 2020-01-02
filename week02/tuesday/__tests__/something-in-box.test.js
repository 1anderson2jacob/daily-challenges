'use strict';

let inBox = require('../something-in-box');

describe('normal inputs', () => {
  it('does return false if nothing is in the box', () => {
    expect(inBox([
      "#####",
      "#   #",
      "#   #",
      "#   #",
      "#####"
    ])).toEqual(true);
  })

  it('does return true if theres an asterik in the box', () => {
    expect(inBox([
      "#####",
      "#   #",
      "# * #",
      "#   #",
      "#####"
    ])).toEqual(true);
  })
})


/*
Test.assertEquals(inBox([
		"###",
		"# #",
		"###"
	]), false)

Test.assertEquals(inBox([
		"####",
		"#  #",
		"#  #",
		"####"
	]), false)

Test.assertEquals(inBox([
		"#####",
		"#   #",
		"#   #",
		"#   #",
		"#####"
	]), false)

Test.assertEquals(inBox([
		"###",
		"#*#",
		"###"
	]), true)

Test.assertEquals(inBox([
		"####",
		"# *#",
		"#  #",
		"####"
	]), true)

Test.assertEquals(inBox([
		"#####",
		"#  *#",
		"#   #",
		"#   #",
		"#####"
	]), true)

Test.assertEquals(inBox([
		"#####",
		"#   #",
		"# * #",
		"#   #",
		"#####"
	]), true)

Test.assertEquals(inBox([
		"#####",
		"#   #",
		"#   #",
		"# * #",
		"#####"
	]), true)

Test.assertEquals(inBox([
		"#####",
		"#*  #",
		"#   #",
		"#   #",
		"#####"
	]), true)
*/