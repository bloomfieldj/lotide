const countLetters = function(allLetters){
  let results = {}
  const counterKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let letterKeys = allLetters.toLowerCase();
  for(counterKey of counterKeys){
    let letterIndices = [];
      for(letterKey of letterKeys){
        for(let letterSearchIndex = 0;
            letterSearchIndex < allLetters.length;
            letterSearchIndex ++) { 
          if(counterKey === letterKey){
            if(allLetters.indexOf(letterKey, letterSearchIndex) >= 0){
              letterIndices.push(allLetters.indexOf(letterKey, letterSearchIndex));
            }
          }
        let uniqueIndices = new Set(letterIndices);
        letterIndices = [...uniqueIndices];
        }
      }

    results[counterKey] = letterIndices;
  }
  console.log(results);
}

countLetters('acaabfhalsdkfhjsdjfg');