function getNthFib(n) {
  if(n===1) {
    return 0;
  }

  if(n===2) {
    return 1;
  }
  // Write your code here.
  return getNthFib(n-1) + getNthFib(n-2);
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
