function sunsetViews(buildings, direction) {
  // Write your code here.

  let stack = [];
  const sunsetViews = [];
  
  if(direction === 'EAST') {
    for (let i = buildings.length - 1; i >= 0; i--) {
      const building = buildings[i];
      if(!stack.length) {
        stack.push(building);
        sunsetViews.unshift(i);
      } else {
        if(building > stack[stack.length - 1]) {
          stack.push(building);
          sunsetViews.unshift(i);
        } else {
          const tempStack = [];
          while (building < stack[stack.length -1]) {
            tempStack.push(stack.pop());
          }
          stack.push(building);
          while (tempStack.length) {
            stack.push(tempStack.pop());
          }
        }
      }
    }
  } else {
    for (let i = 0; i < buildings.length; i++) {
      const building = buildings[i];
      if(!stack.length) {
        stack.push(building);
        sunsetViews.push(i);
      } else {
        if(building > stack[stack.length - 1]) {
          stack.push(building);
          sunsetViews.push(i);
        } else {
          const tempStack = [];
          while (building < stack[stack.length -1]) {
            tempStack.push(stack.pop());
          }
          stack.push(building);
          while (tempStack.length) {
            stack.push(tempStack.pop());
          }
        }
      }
    }
  }
  return sunsetViews;
}

// Do not edit the line below.
exports.sunsetViews = sunsetViews;
