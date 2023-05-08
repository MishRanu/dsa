function bubbleSort(array) {
  // Write your code here.

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i -1; j++) {
      if(array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }

  return array;

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
