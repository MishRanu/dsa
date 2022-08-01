/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/


/* 
    NOTE Selection Sort
    1. Insertion Sort: Sorting Algorithm, in which the sequence (a0....ai) is always in sorted order. a(i+1) element is inserted in the correct order in each iteration 
    2. Examples
Iteration
    1    [10, 2, 3, 5, 7, 1]
    2        [1, 2, 3, 5, 7, 10]
    3            [1, 2, 3, 5, 7, 10]
    4                [1, 2, 3, 5, 7, 10]
    5                    [1, 2, 3, 5, 7, 10]
    6                        [1, 2, 3, 5, 7, 10]
        LOOP INVARIANT: ith element is in sorted order in the array at the end of the iteration
 */

/* 
   3. 
        Choose the index 'i' as min in outer loop
        Inner Loop to compare and find the index with the minimum value
        Swap value at i and minValueIndex
*/

function selectionSort(array) {
    let minIndex;
    for (let i = 0; i < array.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    for (const element of array) {
        console.log(element);
    }
}


selectionSort([10, 2, 5, 3, 7, 1]);