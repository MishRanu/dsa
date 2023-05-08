function staircaseTraversal(height, maxSteps) {
  // Write your code here.


  function staircaseTraversalHelper(height, maxSteps, current, permutations) {

  if(height === 0) {
    console.log("here", current);
    permutations.push(current);
    return;
  }
    
  let h = Math.min(height, maxSteps);
  
  for (let i = 1; i <= h; i++) {
    const newPermutation = current.concat([i]);
    const permutation = staircaseTraversalHelper(height - i, maxSteps, newPermutation, permutations);
  }

}

  const permutations = [];
  staircaseTraversalHelper(height, maxSteps, [], permutations);
  
  return permutations.length;
}

// Do not edit the line below.
exports.staircaseTraversal = staircaseTraversal;
 