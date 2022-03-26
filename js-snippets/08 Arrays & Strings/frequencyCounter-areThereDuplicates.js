/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/

/*
    Problem: Check if any two arguments in the function callback is same
    Examples: 
    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true
    areThereDuplicates('a', 'b', 'c', 'a') //true
    areThereDuplicates('aa', 'ba', 'ca', 'aa') //true
      L                    R
    ['aa','ba','ca','aa','da']

*/

function areThereDuplicates(...params) {
    //If the number of params is 0 or 1 return

    if (!params || params.length === 1) return false;

    /* 
    Approach2:
    1. make a map 'lookup' for params
    2. Loop through each param in params
        1.1 If 'lookup' param is non zero return true
        1.2 set 'lookup' oaram to 1
    3. return false
    */
    const lookup = {};
    for (const param of params) {
        if (lookup[param]) {
            return true;
        } else {
            lookup[param] = 1;
        }
    }

    return false;
}
