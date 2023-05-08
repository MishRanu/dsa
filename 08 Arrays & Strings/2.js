function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let arr = [];

  for (let i = 0; i < string.length; i++) {
    arr.push(string.charCodeAt(i));
  }

  const charCodeA = 'a'.charCodeAt(0);
  const charCodeZ = 'z'.charCodeAt(0);
  
  arr = arr.map((i) => i + key).map((c) => charCodeA + (c - charCodeA)%26);
  return String.fromCharCode(...arr);
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
