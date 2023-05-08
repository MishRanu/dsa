function isValidSubsequence(array, sequence) {
  // Write your code here.

  if(sequence.length === 0){
    return true;
  }

  if(sequence.length === 1) {
    return Boolean(array.find((a) => a === sequence[0]));
  }

  let visitedIndex = 0;
  for (let elem of array) {
   if(sequence[visitedIndex] === elem) {
     visitedIndex++;
   }
  }

  if(visitedIndex === sequence.length) {
    return true;
  } 
  return false;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
