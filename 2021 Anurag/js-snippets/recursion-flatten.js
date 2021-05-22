function flatten(arrArrays) {
    if (arrArrays.length === 0) return [];
    if (Array.isArray(arrArrays[0])) {
        arrArrays[0] = flatten(arrArrays[0]);
    } else {
        arrArrays[0] = [arrArrays[0]];
    }
    return [...arrArrays[0], ...flatten(arrArrays.slice(1))];
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3



/*
    TOOK MUCH MORE TIME THAN USUAL DUE TO NON FULL APPLICATION OF MIND

    Author mixed iterative with recursion, while my soluton was pure recursion and had more edgecases
    
    function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
            if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
            } else {
                newArr.push(oldArr[i])
            }
    }
    return newArr;
    }
*/