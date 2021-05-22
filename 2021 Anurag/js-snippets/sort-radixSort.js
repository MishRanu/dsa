/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/

/* 
    NOTE Radix Sort
    Problem: Sort an array of numbers using bucketing
    [123,9,11,1,7,88,100]
    Max digit number in array = 3 -> Bucketing will take place 3 times
    [Buckets]  Iteration-1          Iteration-2             Iteration-3
        0       0-> [100]       0-> [100,1,7,9]     0-> [1,7,9,11,88]        
        1       1-> [11,1]      1-> [11]            1-> [100,123]
        2       2               2-> [123]           2
        3       3-> [123]       3                   3
        4       4               4                   4
        5       5               5                   5
        6       6               6                   6
        7       7-> [7]         7                   7
        8       8-> [88]        8-> [88]            8
        9       9-> [9]         9                   9
        [100,11,1,123,7,88,9] [100,1,7,9,11,123,88] [1,7,9,11,88,100,123]
*/

/* 
    For calculating the number of times the bucketing process has to be done
 */
function maxDigitsInArray(arr) {
    const max = Math.max(...arr);
    return max.toString().length;
}




/* 
    For calculating the digit at pow10 of i in num
 */
function getDigitByPosition(num, i) {
    const digit = Math.floor(num / Math.pow(10, i - 1)) % 10;
    return digit;
}


/* 
    Function for sorting the array
 */
function radixSort(arr) {

    /* 
        Create n buckets
            For each bucket, iterate through the array put the element in bucket queue
            dequeue the elements from the bucket and create a new array
    */

    const numBuckets = maxDigitsInArray(arr);
    for (let i = 0; i < numBuckets; i++) {
        const buckets = Array.from(Array(10), () => []);
        for (const num of arr) {
            const digit = getDigitByPosition(num, i + 1);
            buckets[digit].push(num);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

let arr = [123, 9, 11, 1, 7, 88, 100, 10000];
const maxDigits = maxDigitsInArray(arr);
const digit = getDigitByPosition(12, 3);
arr = radixSort(arr);
console.log(arr);

/* 
    YEAH ! YEAH ! YEAH ! BONGO !!!
    I DID IT ON MY OWN!!!!
    INCREDIBLE. I AM VERY HAPPY !!!
*/