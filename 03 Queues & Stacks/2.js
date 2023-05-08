function balancedBrackets(string) {
  // Write your code here.
  const matcher = "()[]{}";

  const stack = [];
  for (let char of string) {
    if(matcher.indexOf(char) === -1) {
      continue;
    }
    if(isOpen(char)) {
      stack.push(char);
    } else {
      if(matcher.indexOf(stack[stack.length -1]) + 1 === matcher.indexOf(char)){
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if(stack.length) {
    return false;
  }

  return true;
  function isOpen(char) {
    return matcher.indexOf(char) % 2 === 0;
  }
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
