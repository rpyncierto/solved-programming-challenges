const digitalRoot = n => {
    let sum = 0;
    for (let i = 0; i < n.toString().length; i++) {
      sum += Number(n.toString()[i])
    }
    if (sum.toString().length != 1) return digitalRoot(sum)
    return sum
} 