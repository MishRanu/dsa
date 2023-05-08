function sortStack(stack) {
  // Write your code here.
    function sortStackRecursive(stack) {
      if(!stack.length) {
        return [];
      }
      let top = stack.pop();
      stack = sortStackRecursive(stack);
      console.log('top', top);
      console.log('stack 1', stack);
      if(!stack.length) {
        stack.push(top);
      } else {
        const elems = [];
        while(top < stack[stack.length -1]) {
          elems.push(stack.pop());
        }
        console.log('elems', elems);
        stack.push(top);
        while(elems.length) {
          stack.push(elems.pop());
        }
    }

    console.log('stack 2', stack);

    return stack;
  }
  stack = sortStackRecursive(stack);
   return stack;
  
}

// Do not edit the line below.
exports.sortStack = sortStack;
