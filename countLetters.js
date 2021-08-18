const countLetters = function(allLetters){
  let results = {}
  const counterKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let letterKeys = allLetters.toLowerCase();
  for(counterKey of counterKeys){
    let count = 0;
      for(letterKey of letterKeys){
        if(counterKey === letterKey){
          count++;
        }
      }
    results[counterKey] = count;
  }
  console.log(results);
}

countLetters('hello my ny name is the real bamboozle');