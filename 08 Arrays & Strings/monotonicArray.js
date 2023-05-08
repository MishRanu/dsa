function isMonotonic(array) {
  // Write your code here.
  let monotonic = true;
  let isInc = false;
  let isDec = false;
  for (let i = 0; i < array.length -1 ; i++) {
    if(array[i] > array[i + 1]) {
      if(isInc) {
        monotonic = false;
        break;
      } else {
        isDec = true;
      }
    } else if(array[i] < array[i +1]) {
            if(isDec) {
        monotonic = false;
        break;
      } else {
        isInc = true;
      }
    } 
  }

  return monotonic;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
