const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🎈🎈🎈 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥺🥺🥺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let arrayTail = [];
const tail = function (array) {
  arrayTail = array.slice(1, array.length - 1);
  return arrayTail;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements
