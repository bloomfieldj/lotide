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

const without = function(source, itemsToRemove){
  let resultsArray = [];
  for (element of source){
    if(itemsToRemove.indexOf(element) === -1){
      resultsArray.push(element);
    } 
  }

  console.log(resultsArray);

}

const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);