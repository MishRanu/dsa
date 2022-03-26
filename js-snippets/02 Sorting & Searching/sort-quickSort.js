/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/


/* 
    NOTE Quick Sort
    1. Write a function to perform merge sort
        Merge sort works on merge two sorted arrays
        We use the divide and conquer to divide the original array into subarrays of length 0 or 1 
        and then merge them bottom up

                                               

                                                  L(1) --- E(1)         
                                                 /         
                             L(3) --partition--> E(pivot) --- R(1) --- E(1)
                            /                                   
     8---partition---> E(pivot)                    
                            \                   
                            R(4) --partition-> E(pivot) ---- L(1) --- E(1)
                                                  \                             
                                                  R(2) --partition--> E(pivot)
                                                                            \
                                                                             R(1) --- E(1)
                                                    
*/


/* 
    Function to parition array based on the pivot
*/

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function partition(arr, l = 0, r = arr.length - 1) {
    const pivotIdx = l;
    const pivot = arr[pivotIdx];
    let swapIdx = l;

    while (l <= r) {
        l++;
        if (arr[l] < pivot) {
            swapIdx++;
            swap(arr, l, swapIdx);
        }
    }
    swap(arr, pivotIdx, swapIdx);
    return swapIdx;
}


/* 
    Recursive function to sort the array
*/
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return arr;

    let pivotIdx = partition(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);

}

let arr = [24, 10, 76, 73, 7, 1, 2];
/* 
        24,10,76,73,7,1,2
                24
        7,1,2,10    73,76
            7        73
        1,2  10        76
         1
          2

    
*/
partition(arr);
quickSort(arr);

arr;