/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/


/* 
    NOTE Insertion Sort
    1. Insertion Sort: Sorting Algorithm, in which the sequence (a0....ai) is always in sorted order. a(i+1) element is inserted in the correct order in each iteration 
    2. Examples
Iteration
    1    [10, 2, 3, 5, 7, 1]
    2        [2, 10, 3, 5, 7, 1] ->
    3            [2, 3, 10, 5, 7, 1] ->
    4                [2, 3, 5, 10, 7, 1] -> 
    5                    [2, 3, 5, 7, 10, 1] -(Copied 1)-> [2, 3, 5, 7, _, 10] -> [2, 3, 5, _, 7, 10] -> [2, 3, _, 5, 7, 10] ->  [2, _, 3, 5, 7, 10] -> [_, 2, 3, 5, 7, 10] -> [1, 2, 3, 5, 7, 10]
    6                       [1, 2, 3, 5, 7, 10] 

        LOOP INVARIANT: ith element is in sorted order in the array at the end of the iteration
 */

/* 
   3. 
        Choose the index 'i' as min in outer loop
        Inner Loop to compare and find the index with the minimum value
        Swap value at i and minValueIndex
*/

function insertionSort(arr) {
    let i, j;
    for (i = 1; i < arr.length; i++) {
        const currentVal = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }

    for (const element of arr) {
        console.log(element);
    }
}


insertionSort([10, 2, 5, 3, 7, 1]);