/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/

/*
    Problem: the second has characters from first in the same order
    Examples: 'hello' <-> 'hello world' //true
               'abc' <-> 'abracadabra' //true
               'abc', 'acb' //false
*/

function isSubsequence(first, second) {
    /* 
    Approach1: 
    1. Pointers in two array L(first) and L(second)
    2. if L(first) === L(second)
        2. Increment L(first) check 3, increment L(second) 
    3. if L(first) !== L(second)
        3. Only increment L(second) by 1
    3. Exit: if L(first) === first.length - 1 return true, L(second)= second.length - 1 return false
        3.1 if first and second are null return false
    */

    /* 
    Approch2: Divide and conquer -> would have been easier
     */
    if(!first) return true;
    const m = first && first.length;
    const n = second && second.length;
    let i = 0, j = 0;
    while (i < m && j < n) {
        if (first[i] === second[j]) {
            i = i + 1;
            if (i === m) return true;
            j = j + 1;
        } else {
            j = j + 1;
        }
    }
    return false;

}