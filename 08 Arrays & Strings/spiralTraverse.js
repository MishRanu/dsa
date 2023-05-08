function spiralTraverse(array) {
  // Write your code here.

  let n = array.length;
  let m = array[0].length;

  let startRow =0, endRow = n-1, startCol =0, endCol=m-1;

  let traverse = [];

  while(startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      traverse.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      traverse.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col>= startCol; col--) {
      if(startRow == endRow) break;
      traverse.push(array[endRow][col]);
    }

    for (let row = endRow -1; row > startRow; row--) {

      if(startCol === endCol) break;
      traverse.push(array[row][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }


  return traverse;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
