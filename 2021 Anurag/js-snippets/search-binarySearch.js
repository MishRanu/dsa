/*
1. Understand the problem
2. Concrete Examples 
3. Break it down
4. Solve or simplify
5. Look back and refactor
*/

/*


    Problem: Return index of a value in an array, if not found return -1
    Examples: 
        binarySearch([1,2,3,4,5],2) // 1
        binarySearch([1,2,3,4,5],3) // 2
        binarySearch([1,2,3,4,5],5) // 4
        binarySearch([1,2,3,4,5],6) // -1
        binarySearch([
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99
        ], 10) // 2
        binarySearch([
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99
        ], 95) // 16
        binarySearch([
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99
        ], 100) // -1

*/

function binarySearch(array, value) {

    let l = 0;
    let r = array.length - 1;
    while (l <= r) {
        let middle = Math.floor((l + r) / 2);
        if (array[middle] < value) {
            l = middle + 1;
        } else if (array[middle] > value) {
            r = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}