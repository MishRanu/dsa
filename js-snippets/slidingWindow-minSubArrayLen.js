/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/

/* NOTE Sliding Window Pattern

Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:



    Problem: 
        Find the subArray with min length with sum greater than or equal to given sum
    Examples: 
        minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
        minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
        minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
        minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
        minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
        minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
        minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
                 L
        [2,3,1,2,4,3] 7
                   R
        2
*/


/* 
    XXXX --------- WARNING: STUDY THE PROBLEM STATEMENT PROPERLY AND PLAN THE APPROACH --------- XXXXX 
 */
function minSubArrayLen(array, sum) {
    /* 
    Approach: 
    - Solve using sliding window
    - minLength  
    - Maintain l, r for window from l to r with currSum(l, r) >= maxSum
        - Exit l>r, r = n 
        - If currSum(l, r) >= maxSum l++
        - If currSum(l, r) < maxSum r++
    */

    if (!array || !array.length) return null;
    let minLength = Infinity;
    let l = 0, r = 0;
    let currSum = array[l];
    while (l <= r && r < array.length) {
        if (currSum < sum) {
            r++;
            currSum = currSum + array[r];
        } else if (currSum >= sum) {
            const tempLength = r - l + 1;
            minLength = Math.min(minLength, tempLength);
            currSum = currSum - array[l];
            l++;
        }
    }

    if (l === 0 && r === array.length) return 0;

    return minLength;

}