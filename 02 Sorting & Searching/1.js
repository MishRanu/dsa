function binarySearch(array, target) {
  // Write your code here.
  let l =0;
  let r = array.length-1;
  
  while (l<=r) {
    let mid = Math.floor((l + r)/2);
    if(target===array[mid]) {
      return mid;
    } else if(target > array[mid]) {
      l = mid+1;
    } else {
      r = mid -1;
    }
  }

  return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
