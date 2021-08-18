const assertEqual = function (actual, expected) {
  console.log(actual === expected ?
  "🎈🎈🎈 Assertion Passed: Both arrays are identical!":
  "🥺🥺🥺 Assertion Failed: Both arrays are not identical!");
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

const findKeyByValue = function(object, value){
  let keys = Object.keys(object);
  for(objectKey of keys){
    if(object[objectKey] === value){
      return objectKey;
    }
  }
}   



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);