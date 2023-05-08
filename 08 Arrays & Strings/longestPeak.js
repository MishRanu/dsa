function longestPeak(array) {
  // Write your code here.
  let maxLength = 0;

  console.log(array);
  for (let i = 1; i < array.length; i++) {
    let j=i, k=i;
    let leftIncr = false;
    let rightIncr = false;

    while ( j >0 ) {
      if(array[j] > array[j-1]) {
        leftIncr = true;
        j--;
      } else {
        break;
      }
    }

    while ( k < array.length ) {
      if(array[k] > array[k+1]) {
        rightIncr = true;
        k++;
      } else {
         break;
      }
    }

    if(leftIncr && rightIncr) {
      let length = k - j + 1;
      maxLength  = length > maxLength ? length: maxLength;
      console.log(array[i], length);
    }
 
  }

  return maxLength;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
