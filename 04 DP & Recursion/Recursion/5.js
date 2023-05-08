function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
  const variants = {
    0: [0],
    1: [1],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  const permutations = [];
  function phoneNumberMnemonicsHelper(phoneNumber, current, permutations){
    if(phoneNumber.length === 0) {
      permutations.push(current.join(''));
      return;
    }

  const number = phoneNumber[0];
  console.log(number);
   for (let variant of variants[number]) {
     const newPermutation = current.concat([variant]);
     phoneNumberMnemonicsHelper(phoneNumber.slice(1), newPermutation, permutations);
   }
  }

  phoneNumberMnemonicsHelper(phoneNumber, [], permutations);
  return permutations;
}

// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;
