function firstNonRepeatingCharacter(string) {
  // Write your code here.
  const charCount = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
       if(!charCount[char]) {
      charCount[char] = {count: 1, index: i}
      
    } else {
         charCount[char].count = charCount[char].count + 1;
    }
  }

  let min = Infinity;
  let anyDistinct = false;
  for (let char in charCount) {
    if(charCount[char].count === 1) {
      anyDistinct = true;
      if(charCount[char].index < min) {
        min = charCount[char].index;
      }
    }
  }

  return anyDistinct ? min: -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
