function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function partition(arr, l = 0, r = arr.length - 1) {
  const pivotIdx = l;
  const pivot = arr[pivotIdx];
  let swapIdx = l;

  while (l <= r) {
      l++;
      if (arr[l] < pivot) {
          swapIdx++;
          swap(arr, l, swapIdx);
      }
  }
  swap(arr, pivotIdx, swapIdx);
  return swapIdx;
}


/* 
  Recursive function to sort the array
*/
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  let pivotIdx = partition(arr, left, right);
  quickSort(arr, left, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, right);
  return arr;
}
// Do not edit the line below.
exports.quickSort = quickSort;
