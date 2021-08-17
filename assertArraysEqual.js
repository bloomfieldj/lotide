const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2){
  let resultsArray = [];
  for (let i = 0; i < array1.length; i++){
    resultsArray.push(assertEqual(array1[i], array2[i]))
  }
  
console.log(resultsArray.indexOf(false) === -1 ?
"🎈🎈🎈 Assertion Passed: Both arrays are identical!":
"🥺🥺🥺 Assertion Failed: Both arrays are not identical!");

}

   

