function getPermutations(array) {
  // Write your code here.

  var permutations = [];
  
  function permutationHelper(array, currentPermutation, permutations) {

    if(array.length === 0 && currentPermutation.length) {
      permutations.push(currentPermutation);
    }

    for (let i = 0; i < array.length; i++) {

      // const newArray = array.slice(0,i).concat(array.slice(i+1));
      // const newPermutation = currentPermutation.concat([array[i]]);
      // permutationHelper(newArray, newPermutation, permutations);
      swap(array, 0, i);
      console.log(currentPermutation);
      const newPermutation = currentPermutation.concat([array[0]]);
      // console.log(newPermutation);

      permutationHelper(array.slice(1, array.length), newPermutation, permutations);
      swap(array, 0, i);
    }

  }
    

  permutationHelper(array, [], permutations);

  return permutations;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Do not edit the line below.
exports.getPermutations = getPermutations;


function getPermutations(array) {
  // Write your code here.

  const permutations = [];
  
  function permutationHelper(array, currentPermutation, permutations) {
    
  if(array.length === 0 && currentPermutation.length) {
    permutations.push(currentPermutation);
  }
  
  for (let i = 0; i < array.length; i++) {
    swap(array, 0, i);
    const newPermutation = currentPermutation.concat([array[0]]);
    permutationHelper(array.slice(1, array.length), newPermutation, permutations);
    swap(array, 0, i);
  }
  }

  permutationHelper(array, [], permutations);
  return permutations;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i]=array[j];
  array[j]=temp;
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
