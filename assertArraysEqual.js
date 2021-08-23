const assertEqual = require('./assertEqual');

const assertArraysEqual = function(array1, array2){
  let resultsArray = [];
  for (let i = 0; i < array1.length; i++){
    resultsArray.push(assertEqual(array1[i], array2[i]))
  }
  
  return resultsArray.indexOf(false) === -1 ?
    "🎈🎈🎈 Assertion Passed: Both arrays are identical!":
    "🥺🥺🥺 Assertion Failed: Both arrays are not identical!";

}


module.exports = assertArraysEqual;
   

