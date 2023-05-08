/*
  Time Complexity O(n ^3)
*/
function longestPalindromicSubstring(string) {
  // Write your code here.

  if(string.length === 1) {
    return string;
  }

  let longestPalindrome = '';

  const substrings = [];
  for (let i = 0; i < string.length; i++) {
     for (let j = i; j <= string.length; j++) {
       const substr = string.slice(i, j);
        substrings.push(substr);
       if(isPalindrome(substr)) {
         if(longestPalindrome.length < substr.length) {
           longestPalindrome = substr;
         }
       }
     }
  }
  console.log(substrings);
  
  return longestPalindrome;
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;



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