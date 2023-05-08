function nonConstructibleChange(coins) {
  // Write your code here.

  if(!coins && !coins.length) {
    return 1;
  }
  
  coins = coins.sort((a,b) => a-b);
  let maxSum = coins.reduce((sum, curr) => {return sum + curr}, 0);
  const coinMap = coins.reduce((map, coin) => {
    if(!map[coin]) {
      map[coin] = 1;
    } else {
      map[coin] = map[coin] + 1;
    }
    return map;
  }, {});
  
  
  const sums = Array.from(Array(maxSum));

  for (let i = 1; i <= maxSum; i++) {
    const newCoinMap = {...coinMap};
    if(newCoinMap[i] > 0) {
      newCoinMap[i] = newCoinMap[i] -1;
      sums[i -1] = {...newCoinMap};
    }
  }

  for (let i = 1; i <= maxSum; i++) {
    const newCoinMap = sums[i -1];
  
    if(newCoinMap) {
      continue;
    }
    
    for (let c in coinMap) {
      if(sums[i-c -1] && sums[i-c -1][c] > 0) {
        sums[i -1] = true;
        sums[i -1] = {...sums[i-c -1]}
        sums[i -1][c] = sums[i -1][c] -1;
      }
    }
  }
  console.log(sums);

  const index = sums.findIndex(sum => !sum);
  
  if(index === -1) {
    return sums.length + 1;
  }
  return index + 1;
  
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
