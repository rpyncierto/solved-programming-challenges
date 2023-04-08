const xPlusY = n => {
    let arr = n.split("")
    let turns = 0;
    for (let i = 0; i < arr.length; i++) {
      if (parseInt(arr[i]) === 1) {
        turns++;
        if (i+1 != arr.length) arr[i+1] = (parseInt(arr[i+1]) === 1)? "0": "1";
      }
    }
    return turns;
}