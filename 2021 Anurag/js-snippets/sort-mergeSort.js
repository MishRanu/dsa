/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/


/* 
    NOTE Merge Sort
    1. Write a function to perform merge sort
        Merge sort works on merge two sorted arrays
        We use the divide and conquer to divide the original array into subarrays of length 0 or 1 
        and then merge them bottom up

               1 ----------merge----> 2
              /                        \
             2 -- 1  1                  4
            /       /                   / \
          4 ----- 2 - 1 ----merge----> 2    \
         /                                   \
        8           1                      merge----> 8
         \         /  ----merge------> 2    /
          4 ----- 2 -- 1                \ /
           \                             4
            2 -- 1                      /
             \   --------merge-==----> 2
              1
              
              merge sorted arrays
                                                    
*/




/* 
    Function to merge two sorted arrays
*/
function merge(arr1, arr2) {
    let i = 0, j = 0;
    let array = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            array.push(arr1[i]);
            i++;
        } else {
            array.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        array.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        array.push(arr2[j]);
        j++;
    }

    // for (const element of array) {
    //     console.log(element);
    // }

    return array;

}


/* 
    Recursive function for sorting
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// merge([1, 3, 5], [2, 4, 7, 10]);

let array = mergeSort([10, 24, 76, 73]);
for (const element of array) {
    console.log(element);
}