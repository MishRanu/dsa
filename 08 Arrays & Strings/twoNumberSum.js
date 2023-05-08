function twoNumberSum(array, targetSum) {
  // Write your code here.
  array = array.sort((a, b) => a - b);
  let i =0, j = array.length-1;
  let found = false;
  while (i<array.length && j > 0) {
    if(array[i] + array[j] > targetSum) {
      j--;
    } else if(array[i] + array[j] < targetSum) {
      i++;
    } else {
      if(i!==j) {
        found = true;
        break;
      }
    }
  }
  if(!found){
    return [];
  }
  return [array[i], array[j]];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
