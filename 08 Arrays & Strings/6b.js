/*
  Time Complexity O(n ^3)
*/
function longestPalindromicSubstring(string) {
  // Write your code here.

  if(string.length === 1) {
    return string;
  }

  let longestPalindrome = '';

  for (let i = 1; i < string.length -1; i++) {
    {
        
       let l = i -1;
       let r = i +1;
        while (l>=0 && r<string.length) {
         if(string[l] === string[r]) {
           l--;
           r++;
         } else {
           break;
         }
       }
        l++;
        r--;
    
        if(longestPalindrome.length < r - l + 1) {
          const substr =  string.slice(l, r+1);
          console.log(substr);
          longestPalindrome = substr;
        }
    }
    {
      
      let l = i;
      let r = i +1;
        while (l>=0 && r<string.length) {
         if(string[l] === string[r]) {
           l--;
           r++;
         } else {
           break;
         }
       }
        l++;
        r--;
      
        if(longestPalindrome.length < r - l + 1) {
          const substr =  string.slice(l, r+1);
          console.log(substr);
          longestPalindrome = substr;
        }
    }
    
    
  }
  return longestPalindrome;
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;