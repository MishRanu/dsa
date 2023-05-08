function threeNumberSort(array, order) {
  // Write your code here.

  let count = {};
  for (let i = 0; i < array.length; i++) {
    count[array[i]] = (count[array[i]] || 0) + 1
  }

  console.log(count);
  console.log(order);
  
  let offset = 0;
  for (let elem of order) {
    console.log(elem);
    if(count[elem]) {
          for (let i = 0; i < count[elem]; i++) {
      array[i + offset] = elem;
    }
    offset = offset + count[elem];
    }

  }
  return array;
}

// Do not edit the line below.
exports.threeNumberSort = threeNumberSort;
