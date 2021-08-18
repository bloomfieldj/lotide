const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🎈🎈🎈 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥺🥺🥺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount){
  let itemKeys = allItems;
  console.log(itemKeys)
  let counterKeys = Object.keys(itemsToCount);
  console.log(counterKeys);
  for(counterKey of counterKeys){
    let count = 0;
    if(itemsToCount[counterKey]){
      
      for(itemKey of itemKeys){
        if(counterKey === itemKey){
          count++;
        }
      }
  
    }
    console.log(count);
  
  }
  //console.log(count);
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
