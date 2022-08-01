/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/

/*

Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.


    Problem: 
        Find the longest unique substring 
    Examples: 
        findLongestSubstring('') // 0
        findLongestSubstring('rithmschool') // 7
        findLongestSubstring('thisisawesome') // 6
        findLongestSubstring('thecatinthehat') // 7
        findLongestSubstring('bbbbbb') // 1
        findLongestSubstring('longestsubstring') // 8
        findLongestSubstring('thisishowwedoit') // 6

                   l
        [thecatinthehat] 7
                      r
                  l
        [thisisawesome]
                     r
*/


/* 
            [thecatinthehat] 7
        maxsum < sum
            sum = maxsum
*/
function findLongestSubstring(array) {
    /* 
    Approach: 
    - Solve using sliding window l, r
    - INVARIANT: maxLen -> longest substring with distinct characters: r - l
    - Substring lookup character <-> arrayIndex
    - On duplicate letter, move l to index at lookup(letter)
    */

    if (!array || !array.length) return 0;
    let maxLength = 0;
    let l = 0, r = 0;
    let lookup = {};
    while (r < array.length) {
        if (lookup[array[r]]) {
            l = Math.max(l, lookup[array[r]])
        }

        const tempLength = r - l + 1;
        maxLength = Math.max(maxLength, tempLength);
        lookup[array[r]] = r + 1;
        r++;
    }

    return maxLength;

}

min - 1
max - 10

[1, 2, 3, 4, 5, 6, 7, 9, 10]

/*
    sorted no
    elements repeated no
    length of array n = 10 -> can change
    max - min === n
    n + 1 elements in the sequence
    sum max(max + 1)/2 - min(min + 1)/2  - sum(arr) -> required element
    sequence of numbers


*/


