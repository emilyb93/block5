function findSmallestMultiple(n) {
  for (let i = n; i < Infinity; i += n) {
    let divisible = 0;
    for (let j = 1; j <= n; j++) {
      //   console.log(
      //     `current number to check is ${i}, \n current multiple is ${j} \n current remainder of i%j === ${
      //       i % j
      //     }`
      //   );
      if (i % j === 0) {
        divisible++;
      }
    }
    if (divisible === n) {
      return i;
    }
    // console.log(i);
  }
}

module.exports = findSmallestMultiple;
