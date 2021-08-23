// const assertArraysEqual = require('../assertArraysEqual'); 
// const middle = require('../middle');

// console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 5]));

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [ 2 ] );
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });

});