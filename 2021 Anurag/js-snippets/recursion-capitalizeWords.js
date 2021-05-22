function capitalizeWords(arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return [];

    arr[0] = arr[0].toUpperCase();
    return [arr[0], ...capitalizeWords(arr.slice(1))];
}


let words = ['i', 'am', 'learning', 'recursion'];
words = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
words;