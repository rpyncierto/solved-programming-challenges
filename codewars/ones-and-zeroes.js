const binaryArrayToNumber = arr => {
    const bits = [];
    let decimal = 0;
    for (let i = 0; i < arr.length; i++) bits.unshift(2**i);
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === 1) decimal += bits[i]; 
    }
    return decimal
}