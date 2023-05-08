function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a,b) => a -b);
  console.log(queries);
  
  const waitTimes = new Array(Array(queries.length));
  for (let i = 0; i < queries.length; i++) {
    waitTimes[i] = sumTo(queries, i);
  }

  console.log(waitTimes);
  return waitTimes.reduce((s, c) => s+c, 0);
}

  function sumTo(array, index) {
    return array.slice(0, index).reduce((s ,c) => s + c, 0);
  }


// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
