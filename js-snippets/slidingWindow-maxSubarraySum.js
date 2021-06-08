/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/

/*

    Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

    Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.


    Problem: 
        Find the subarray with length 'm' with maximum sum in a array
    Examples: 
        maxSubarraySum([100,200,300,400], 2) // 700
        maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
        maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
        maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
        maxSubarraySum([2,3], 3) // null
*/

function maxSubarraySum(array, m) {
    /* 
    Approach: 
    1. Solve using sliding window
        1.1. maxSum
    2. Maintain l from 0 to n - m + 1
    3. Calculate sum from l to l + m
    4. Slide window to exlude and include
    */

    if (!array || !array.length) return null;
    if (m > array.length) return null;

    let maxSum = -Infinity;
    let currSum = array.slice(0, m).reduce((sum = 0, val) => val + sum);
    maxSum = Math.max(maxSum, currSum);
    for (let i = 1; i < array.length - m + 1; i++) {
        const element = array[i + m - 1];
        const tempSum = currSum - array[i - 1] + element;
        currSum = tempSum;
        if (tempSum > maxSum) maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;

}