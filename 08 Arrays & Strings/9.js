function reverseWordsInString(string) {
  // Write your code here.

  const words = [];
  let spaceCount = -1;
  let word = '';

  for (let char of string) {
    if(char === ' ') {
      if(spaceCount === 0) {
        words.unshift(word);
        word = '';
      }
      spaceCount = (spaceCount > 0 ? spaceCount: 0) + 1;        
    } else {
      if(spaceCount > 0) {
        for (let i = 0; i < spaceCount; i++) {
            words.unshift(' ');
        }
      }
     spaceCount = 0;
     word = word + char; 
    }
  }
  words.unshift(word);
      if(spaceCount > 0) {
        for (let i = 0; i < spaceCount; i++) {
            words.unshift(' ');
        }
      }
  return words.join('');
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
