function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.

  const rA = [...redShirtSpeeds].sort((a,b) => a-b);
  const rD = [...redShirtSpeeds].sort((a,b) => b-a);

  const bA = [...blueShirtSpeeds].sort((a,b) => a-b);
  const bD = [...blueShirtSpeeds].sort((a,b) => b-a);
  console.log(rA.length);
  console.log(rD.length);
  console.log(bA.length);
  console.log(bD.length);
  
  if(fastest) {
    const sumRD = rD.reduce((s, r, i) => s + Math.max(rD[i], bA[i]), 0);
    const sumBD = bD.reduce((s, b, i) => s + Math.max(bD[i], rA[i]), 0);
    return Math.max(sumRD, sumBD);
  } else {
    const sumRA = rA.reduce((s, r, i) => s + Math.max(rA[i], bA[i]), 0);
    const sumBA = bA.reduce((s, b, i) => s + Math.max(bA[i], rA[i]), 0);
    return Math.min(sumRA, sumBA);
  }
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
