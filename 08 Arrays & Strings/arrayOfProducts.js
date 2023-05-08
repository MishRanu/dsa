/* 
 [5, 1, 4, 2]

 [5, 5, 20, 40]
 5
 5 x 1
 5 x 1 x 4 ->
 5 x 1 x 4 x 2

 2
[40, 8, 8, 2]

 2 x 4
 2 x 4 x 1 ->
 2 x 4 x 1 x 5
*/

function arrayOfProducts(array) {
  // Write your code here.
  const L = [];
  const R = [];
  const ans = [];
  
  array.reduce((prev, curr, i) => {
    L[i] = prev * curr;
    return L[i]}, 1);

  array.reverse().reduce((prev, curr, i) => {
    R[array.length - i -1] = prev * curr;
    return R[array.length - i -1]}, 1);

  for (let i = 0; i < array.length; i++) {
    ans[i] = (i-1 >= 0 ? L[i-1]: 1) * (i+1 < array.length ? R[i+1]: 1)
  }
  
return ans;
  
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
