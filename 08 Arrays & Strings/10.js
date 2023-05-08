function minimumCharactersForWords(words) {
  const charCount = {};
  const chars = [];
  // Write your code here.
  
  for (let word of words) {
    const wordCharCount = {};
    for(let char of word) {
      wordCharCount[char] = (wordCharCount[char] || 0) + 1;
      if(wordCharCount[char] > (charCount[char] || 0)) {
        charCount[char] = wordCharCount[char];
      }
    }
    
  }

  for(let key in charCount) {
      for (let i = 0; i < charCount[key]; i++) {
        chars.push(key);
      }
  }
  return chars;
}

// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;
