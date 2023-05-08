/* 
  Time Complexity O(n)
  Space Complexity O(1)
*/

function moveElementToEnd(array, toMove) {
  // Write your code here.
  let l = 0;
  let r = array.length -1;

  while (l<r) {
    if(array[l] === toMove && array[r] === toMove) {
      r--;
    } else if(array[l] === toMove && array[r] !== toMove) {
      swap(array, l, r);
      l++;
      r--;
    } else if(array[l] !== toMove && array[r] === toMove) {
      r--;
      l++;
    } else {
      l++;
    }
    
  }


  return array;

  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
