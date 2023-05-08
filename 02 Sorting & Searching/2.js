// Using Selection sort
function findThreeLargestNumbers(array) {
  // Write your code here.
  for (let i = 0; i < 3; i++) {
      let max = array[i];
      let index = i;
      for (let j = i+1; j < array.length; j++) {
        if(array[j] > max) {
          max = array[j];
          index = j;
        }
      }
      swap(array, i, index);

  }

  return array.slice(0, 3).sort((a,b) => a-b);


  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
