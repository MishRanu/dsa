function runLengthEncoding(string) {
  // Write your code here.
  const charCounts = [];
  let prevChar = string[0];
  let count = 0;
  
  for (let char of string) {
    if(prevChar === char) {
      count = count + 1;
    } else {
      charCounts.push({char: prevChar, count});
      prevChar = char;
      count = 1;
    }
  }

  charCounts.push({char: prevChar, count});

  let res = '';
  for (let charCount of charCounts) {
    let rem, mod;
    mod = Math.floor(charCount.count / 9);
    rem = charCount.count % 9;
    let prefix = '';
    if(mod > 0) {
      console.log(mod);
      prefix += Array.from(Array(mod), () => 0).map(() => `9${charCount.char}`).join('');
    }
    if(rem) {
      prefix += `${rem}${charCount.char}`
    }
    res+= prefix;
  }

  return res;
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
