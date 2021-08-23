const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2){
  let resultsArray = [];
  for (let i = 0; i < array1.length; i++){
    resultsArray.push(assertEqual(array1[i], array2[i]))
  }
  
  return resultsArray.indexOf(false) === -1
  
  }
   
module.exports = eqArrays;
