const assertEqual = require('./assertEqual');

const tail = function (array) {
  
  let arrayTail = array[array.length - 1];
  return arrayTail;

};


module.exports = tail;

