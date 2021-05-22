/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/

/*
    Problem: Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
        Your solution MUST have the following complexities:
        Time: O(N)
        Sample Input:
    Examples:
        sameFrequency(182,281) // true
        sameFrequency(34,14) // false
        sameFrequency(3589578, 5879385) // true
        sameFrequency(22,222) // false
*/

function sameFrequency(first, second) {
    //Compare the length of the two strings. Return false if they are not equal
    if (first.length != second.length) return false;
    // Approach1: Loop through each character in stringA and check indexOf(char) in stringB is non zero

    /* 
    Approach2: 
    1. Loop through each letter in first, make a map 'lookup' letter <-> frequency
    2. Loop through each letter in second, for each letter
        2.1 check if valid frequency in map 'lookup', not zero || undefined
        2.2 decrease frequency in 'lookup'
    */
    const lookup = {};
    for (const letter of first) {
        lookup[letter] = ++lookup[letter] || 1;
    }

    for (const letter of second) {
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;

}
