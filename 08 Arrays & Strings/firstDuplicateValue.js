function firstDuplicateValue(array) {
  // Write your code here.
  // let prod = 1;
  // let foundOne = false;
  // for (let i = 0; i < array.length; i++) {
  //   if(array[i] === 1 && foundOne) {
  //      return 1;
  //   } else if(array[i] === 1) {
  //     foundOne = true;
  //   } else if(prod % array[i] === 0) {
  //     return array[i];
  //   } else {
  //     prod = prod * array[i];
  //   }
  // }
  // return -1;
  // array = [23, 21, 22, 5, 3, 13, 11, 16, 5, 11, 9, 14, 23, 3, 2, 2, 5, 11, 6, 11, 23, 8, 1]

  for (let i = 0; i < array.length; i++) {
    if(typeof array[i] === "number") {
      if(typeof array[array[i] -1] === "number") {
        array[array[i] -1] = {value: array[array[i] -1], found: true};
      } else {
        return array[i];
      }
    
    } else {
      const currNumIndex = array[i].value - 1;
      
      if(typeof array[currNumIndex] === "number") {     
          array[currNumIndex] = { value: array[currNumIndex], found: true};
      } else {
        return currNumIndex + 1;
      }
    }
    console.log(array)
  }
  return -1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;