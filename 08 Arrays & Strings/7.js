function groupAnagrams(words) {
  // Write your code here.
  xorWords = words.map(word => Array.from(word).map(c => c.charCodeAt(c)).reduce((c, s) => {
     return c ^s;
  }, 0)).reduce((obj, xor, i) => {
    obj[i] = xor;
    return obj;
  }, {});

  console.log(xorWords);
  const anagrams = [];
  
  for (let i = 0; i < words.length; i++) {
    if(words[i] === -1) {
      continue;
    }
    const anagram = [words[i]];
    for (let j = i+1; j < words.length; j++) {
      if(xorWords[i] === xorWords[j] && words[i].length === words[j].length) {
        anagram.push(words[j]);
        words[j] = -1;
      }
    }
    anagrams.push(anagram);
  }

  return anagrams;
  
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
