const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`πππ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`π₯Ίπ₯Ίπ₯Ί Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertEqual;