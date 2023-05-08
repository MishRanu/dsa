function isPalindrome(string) {
  if(string.length === 0 || string.length === 1) {
    return true;
  }
  // Write your code here.
  let mid = Math.floor(string.length/2);

  for (let i = 0; i < mid; i++) {
    if(string[string.length -1 - i] !== string[i]){
      return false;
    }
  }

  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
