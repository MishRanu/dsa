function insertionSort(array) {
  // Write your code here.
  let i, j;
  for (i = 1; i < array.length; i++) {
    const currentVal = array[i];
      for (j = i-1; j >= 0 && array[j] > currentVal; j--) {
          array[j+1]=array[j];
        }
      array[j + 1] = currentVal;
      }

  return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
