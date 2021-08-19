const takeUntil = function(array, callback) {
  const callbackArray = array.map(callback);
  let resultsArray = []
  for( let i = 0; i < array.length; i++){
  !callbackArray[i] ?
  resultsArray.push(array[i]):
  i = array.length;
  }
  return resultsArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);