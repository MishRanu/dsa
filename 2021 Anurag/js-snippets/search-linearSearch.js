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
    linearSearch([10, 15, 20, 25, 30], 15) // 1
    linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
    linearSearch([100], 100) // 0
    linearSearch([1,2,3,4,5], 6) // -1
    linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
    linearSearch([100], 200) // -1

*/

function linearSearch(array, value) {

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element === value) return index;
    }
    return -1;
}