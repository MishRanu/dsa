/*
1. Understand the problem
2. Concrete Examples
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/

/*
    1. Problem: Count the number of uniques values in a sorted array 
    2. Examples
        2.1 countUniqueValues([]) -> undefined
        2.2 countUniqueValues([0, 0, 0, 1]) -> 2
        2.2 countUniqueValues([-1, 0, 0, 1]) -> 3
*/

function countUniqueValues(array) {

    /* Multiple pointers pattern
           i
    [1,2,3,4,2,3,3,3,4] -> 4 = 3 + 1
                     j
    */
   /*  
    1. Maintain i, j
    2. if array[j] not equal to array[i]
        2.1 Increment i update array[i] to array[j]
        2.2 Increment j
    */
    if(!array && !array.length) return 0;
    
    let i = 0, j = 1;
    for (i, j; j < array.length; j++) {
        if(array[j] !== array[i]){
            i = i+1; 
            array[i] = array[j];
        }
    }
    return i+1;
}