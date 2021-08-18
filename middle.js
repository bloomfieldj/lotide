const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

const eqArrays = function(array1, array2){
  let resultsArray = [];
  for (let i = 0; i < array1.length; i++){
    resultsArray.push(assertEqual(array1[i], array2[i]))
  }
  
  return resultsArray.indexOf(false) === -1
  
  }

  
const assertArraysEqual = function(array1, array2){
  let resultsArray = [];
  for (let i = 0; i < array1.length; i++){
    resultsArray.push(assertEqual(array1[i], array2[i]))
  }
  
console.log(resultsArray.indexOf(false) === -1 ?
"🎈🎈🎈 Assertion Passed: Both arrays are identical!":
"🥺🥺🥺 Assertion Failed: Both arrays are not identical!");

}
  
     
  
const middle = function(array){
  let middleArray = array.length % 2 === 0 ? [array[array.length/2 - 1], array[array.length/2]] : [array[Math.floor(array.length/2)]];
  return(middleArray);
}

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);