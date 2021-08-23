const assertEqual = require('../assertEqual');


let arrayTail = [];

const tail = function (array) {
  arrayTail = array.slice(1, array.length - 1);
  return arrayTail;
};

module.exports = tail;

