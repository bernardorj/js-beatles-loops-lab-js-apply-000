function theBeatlesPlay(musicians, instruments){
  let array = [];

  for (let i = 0; i<musicians.length; i++){
    if (i===0){
      array = [musicians[i] + " plays " + instruments[i]];
    } else {
      array = [...array, musicians[i] + " plays " + instruments[i]];
    }
  }
    return array
}

function johnLennonFacts(facts){
  let i = 0;

  while (i<facts.length){
    facts[i].push("!!!");
    i++;
  }
}
