function findSmallestMultiple(n) {
  for (let i = n; i < Infinity; i += n) {
    let divisible = 0;
    for (let j = 2; j <= n; j++) {
      if (i % j === 0) {
        divisible++;
      }
    }
    if (divisible === n - 1) {
      return i;
    }
  }
}

module.exports = findSmallestMultiple;
