function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  var i = 0, found = false;
  var {mid: j} = binarySearch(matrix[0], target);
    console.log(i);
  
  while(j >=0 && found!==true) {
    var {found, mid: i} = modifiedBinarySearch(matrix,j, target)
    j--;
  }
  j = j+1;
  if(found) {
    return [i, j];
  }
  
  return [-1, -1];
  
}

function binarySearch(array, target) {
  // Write your code here.
  let l =0;
  let r = array.length-1;
  let mid = Math.floor((l + r)/2);
  
  while (l<=r) {
    if(target===array[mid]) {
      return {found: true, mid};
    } else if(target > array[mid]) {
      l = mid+1;
    } else {
      r = mid -1;
    }
    mid = Math.floor((l + r)/2);
  }

  return {found: false, mid};
}



function modifiedBinarySearch(matrix, j, target) {
  // Write your code here.
  let l =0;
  let r = matrix.length-1;
  let mid = Math.floor((l + r)/2);
  
  while (l<=r) {
    if(target===matrix[mid][j]) {
      return {found: true, mid};
    } else if(target > matrix[mid][j]) {
      l = mid+1;
    } else {
      r = mid -1;
    }
    mid = Math.floor((l + r)/2);
  }

  return {found: false, mid};
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;
