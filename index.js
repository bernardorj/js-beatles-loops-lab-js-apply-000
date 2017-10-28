function theBeatlesPlay(musicians, instruments){
  let array = [];

  for (let i = 0; i<musicians.length; i++){
    if (i===0){
      array = [musicians[i] + " plays " + instruments[i]];
    } else {
      array = [...array, [musicians[i] + " plays " + instruments[i]]];
    }
  }
    return array;
}
