// Good approach for coin change but discarding the solution
// unable to implement the solution
function validIPAddresses(string) {
  // Write your code here.

  var coinChangeMap = {};
  var combinations = [];
  var max = string.length;
  
  
  function coinChangeStr(total, num) {
    return `${total}-${num}`;
  }

  function coinChange(total, num) {
    if(num===0) {
      return;
    }

    if(coinChange(total -1, num-1)) {
      return [total, ...coinChange(total -1, num-1)]
    }

    if(coinChange(total -2, num-1)) {
      return [total, ...coinChange(total -2, num-1)]
    }

    if(coinChange(total -3, num-1)) {
      return [total, ...coinChange(total -3, num-1)]
    }
 
  }

  coinChange(string.length, 4);
  
  return [];
}



// Do not edit the line below.
exports.validIPAddresses = validIPAddresses;
