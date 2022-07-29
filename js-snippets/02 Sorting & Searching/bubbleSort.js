/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/


/*     
    NOTE Bubble Sort
    1. Bubble Sort: Sorting Algorithm, in which the largest value bubbles towards the end in each iteration
    2. Examples
    Iteration 1:
        [10, 2, 3, 5, 7, 1]
            [2, 10, 3, 5, 7, 1]
                [2, 3, 10, 5, 7, 1]
                    [2, 3, 5, 10, 7, 1]
                        [2, 3, 5, 7, 10, 1]
                            [2, 3, 5, 7, 1, 10] ----> largest value bubbled towards the top
        LOOP INVARIANT: ith element is in sorted order in the array at the end of the iteration
 */

/* 
   3. 
        Choose the index 'i' to sort for in outer loop
        Inner Loop to compare and swap elements towards the end 'i' index 
*/

function bubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j + 1] < array[j]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    for (const element of array) {
        console.log(element);
    }
}

//Optimised for noswaps for nearly sorted array
function bubbleSort(array) {
    let noSwaps;
    for (let i = array.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j + 1] < array[j]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                noSwaps = true;
            }
        }
        if (noSwaps) return;
    }

    for (const element of array) {
        console.log(element);
    }
}

bubbleSort([10, 2, 3, 5, 7, 1]);