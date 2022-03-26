/* 
  JS array Methods
  push - O(1)
  pop - O(1)
  shift - O(N)
  unshift - O(N)
  concat - O(N)
  slice - O(N)
  splice - O(N)
  sort - O(N * logN)
  forEach/map/filter/reduce,etc; - O(N)
*/

var arr = [1, 2, 3, 4, 5];
var originalArr = arr;

console.log("Method: Array push");
var arr2 = arr.push(...[6, 7]); // * Returns the length of the array
console.log("arr2 === arr", arr2 === arr);
console.log("originalArr === arr", originalArr === arr);
console.log("print arr", arr);
console.log("print arr2", arr2);
console.log("\n");

console.log("Method: Array pop");
var arr2 = arr.pop();
console.log("arr2 === arr", arr2 === arr);
console.log("originalArr === arr", originalArr === arr);
console.log("print arr", arr);
console.log("print arr2", arr2);
console.log("\n");

console.log("Method: Array shift");
var arr2 = arr.shift();
console.log("arr2 === arr", arr2 === arr);
console.log("originalArr === arr", originalArr === arr);
console.log("print arr", arr);
console.log("print arr2", arr2);
console.log("\n");

console.log("Array unshift");
var arr2 = arr.unshift(...[0, 1]); // * Returns the length of the array
console.log("arr2 === arr", arr2 === arr);
console.log("originalArr === arr", originalArr === arr);
console.log("print arr", arr);
console.log("print arr2", arr2);
console.log("\n");

console.log("Method: Array concat");
var arr3 = [6, 7, 8];
var arr2 = arr.concat(arr3); // * Returns a new array
console.log("arr2 === arr", arr2 === arr);
console.log("originalArr === arr", originalArr === arr);
console.log("print arr", arr);
console.log("print arr2", arr2);
console.log("\n");

console.log("Method: Array slice");
var arr2 = arr.slice(0, arr.length - 1); // *  (start -> inclusive, end -> exclusive) Returns a new array
console.log("arr2 === arr", arr2 === arr);
console.log("originalArr === arr", originalArr === arr);
console.log("print arr", arr);
console.log("print arr2", arr2);
console.log("\n");

console.log("Method: Array splice");
var arr2 = arr.splice(0, 4); //* (start, deleteCount) */
console.log("arr2 === arr", arr2 === arr);
console.log("originalArr === arr", originalArr === arr);
console.log("print arr", arr);
console.log("print arr2", arr2);
console.log("\n");
