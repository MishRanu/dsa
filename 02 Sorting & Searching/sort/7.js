/* 
    Function to merge two sorted arrays
*/
function merge(arr1, arr2) {
  let i = 0, j = 0;
  let array = [];
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
          array.push(arr1[i]);
          i++;
      } else {
          array.push(arr2[j]);
          j++;
      }
  }

  while (i < arr1.length) {
      array.push(arr1[i]);
      i++;
  }

  while (j < arr2.length) {
      array.push(arr2[j]);
      j++;
  }

  // for (const element of array) {
  //     console.log(element);
  // }

  return array;

}


/* 
  Recursive function for sorting
*/
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// Do not edit the line below.
exports.mergeSort = mergeSort;
