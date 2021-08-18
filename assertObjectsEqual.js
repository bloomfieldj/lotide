const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

const eqArrays = function(array1, array2){
  let resultArray = [];
  let iterationLength = array1.length;
  if (array2.length > array1.length){
    iterationLength = array2.length;
  }
  for (let i = 0; i < iterationLength; i++){
    resultArray.push(assertEqual(array1[i], array2[i]))
  }
  
  return resultArray.indexOf(false) === -1
  
}

const eqObjects = function(object1, object2){
  let resultsArray = []
  let object1Length = Object.keys(object1).length;
  let object2Length = Object.keys(object2).length;
    for( key in object1){
     
    if(typeof(object1[key]) === "object"){
      resultsArray.push(eqArrays(object1[key], object2[key]));
    } else {
    resultsArray.push(assertEqual(object1[key], object2[key])); 
    }
  }
  
  return (object1Length === object2Length ? resultsArray.indexOf(false) === -1: false);
  
}

const assertObjectsEqual = function(actual, expected){
console.log(eqObjects(actual, expected) ?
"🎈🎈🎈 Assertion Passed: Both objects are identical!":
"🥺🥺🥺 Assertion Failed: Both objects are not identical!");
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false