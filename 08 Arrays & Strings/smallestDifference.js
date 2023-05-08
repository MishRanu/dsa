function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne = arrayOne.sort((a,b) => a-b);
  arrayTwo = arrayTwo.sort((a,b) => a-b);

  let i =0, j =0;
  let min = Infinity;
  let minI = 0;
  let minJ = 0;
  
  while(i<arrayOne.length && j<arrayTwo.length) {
    const diff = arrayOne[i] - arrayTwo[j];
    if(Math.abs(diff) < min) {
      min = Math.abs(diff);
      minI = i;
      minJ = j;
    }
    if(diff > 0) {
      j++;
    } else if(diff < 0) {
      i++;
    } else {
      return [arrayOne[i], arrayTwo[j]];
    }
    
  }
  return [arrayOne[minI], arrayTwo[minJ]];
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
