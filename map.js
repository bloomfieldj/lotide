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
    resultsArray.push(assertEqual(array1[i], array2[i]));
  }
  
console.log(resultsArray.indexOf(false) === -1 ?
"🎈🎈🎈 Assertion Passed: Both arrays are identical!":
"🥺🥺🥺 Assertion Failed: Both arrays are not identical!");
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  const results = [];
  
  for (let item of array){
    results.push(callback(item));
  }
  
  return results;
}


assertArraysEqual(map([1, 4, 9, 16], x => x * 2), [2, 8, 18, 32]);
assertArraysEqual(map([1, 4, 9, 16], x => x * 2), [2, 8, 18, 33]);
assertArraysEqual(map(["a", "b", "c"], x => x + "b"), ["ab", "bb", "cb"]);
