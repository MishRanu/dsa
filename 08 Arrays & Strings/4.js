function generateDocument(characters, document) {
  // Write your code here.
  if(document === '') {
    return true;
  }

  const charCount = {};
  for (let char of characters) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of document) {
    charCount[char] = (charCount[char] || 0) - 1;
  }

  let can = true;
  console.log(charCount);
  for (let char in charCount) {
   if(charCount[char] < 0) {
     can = can && false;
   } 
  }
  
  return can;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
