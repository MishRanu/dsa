function sortedSquaredArray(array) {
  // Write your code here.
  return array.map(i => i * i).sort((a,b) => a-b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
