function addUptoN(n) {
  var sum = 0;
  for (let i = 0; i < n; i++) {
    var sum = sum + i;
  }
  return sum;
}

const timer1 = Date.now();
console.log(addUptoN(10000000000));
const timer2 = Date.now();
console.log("timer", timer2 - timer1);

/* 
console.log(addUptoN(10,000,000,000)); 10 billion
  49999999990067860000
  timer 9793 close to 9s
  n additions, n assignments, n comparisons
*/

function addUptoNConst(n) {
  return (n * (n + 1)) / 2;
}

const timerC1 = Date.now();
console.log(addUptoNConst(10000000000));
const timerC2 = Date.now();
console.log("timer", timerC2 - timerC1);

/* 
console.log(addUptoN(10,000,000,000)); 10 billion
  49999999990067860000
  timer 6ms

  Only 3 calculations
  How much performance improvement. Really inspiring.
*/
