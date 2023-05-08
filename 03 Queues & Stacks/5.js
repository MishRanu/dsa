function nextGreaterElement(array) {
  // Write your code here.
  const stack = [];
  const next = Array.from(Array(array.length), () => 0);
  for (let i = 0; i < array.length; i++) {
    const elem = array[i];
    if(!stack.length) {
      stack.push(i);
      continue;
    }

    while(elem > array[stack[stack.length - 1]]) {
      const index = stack.pop();
      next[index] = elem;
    }
    
    stack.push(i);
  }
console.log(stack);
  if(stack.length) {
    
  for (let i = 0; i < array.length; i++) {
    const elem = array[i];

    while(elem > array[stack[stack.length - 1]]) {
      const index = stack.pop();
      next[index] = elem;
    }
    
  }
  }
  
  while(stack.length) {
    next[stack.pop()] = -1;
  }

  return next;
}

// Do not edit the line below.
exports.nextGreaterElement = nextGreaterElement;
