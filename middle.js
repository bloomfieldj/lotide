const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');  

const middle = function(array){
  let middleArray = array.length % 2 === 0 ? [array[array.length/2 - 1], array[array.length/2]] : [array[Math.floor(array.length/2)]];
  return(middleArray);
}


module.exports = middle;