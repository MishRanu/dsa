function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(i, j);
    }
  }
}

const timer1 = Date.now();
console.log(printAllPairs(100000));
const timer2 = Date.now();
console.log("timer", timer2 - timer1);

/* 
console.log(printAllPairs(100000)); 10 ^ 5 i.e. 100 thousand or 1 lakh
  timer 6288 close to 6s
  n * n comparisons
*/
