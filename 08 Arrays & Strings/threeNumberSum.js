function threeNumberSum(array, targetSum) {
  // Write your code here.
  array = array.sort((a, b) => a - b);
  
  const sol = [];
  for (let i = 0; i < array.length -1; i++) {
    let curr = array[i];
    let l = i+1;
    let r = array.length -1;
    const target = targetSum - curr;

    while (l<r) {
    if(array[l] + array[r] > target) {
      r--;
    } else if(array[l] + array[r] < target) {
      l++;
    } else {
        sol.push([curr, array[l], array[r]]);
        l++;
        r--;
    }
  }
  }

  return sol;
}


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
exports.threeNumberSum = threeNumberSum;