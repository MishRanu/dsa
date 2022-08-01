
// function capitalize(str) {
//     str[0] = str[0].toUpperString();
// }
function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return [];
    let str = arr[0];
    str = [str.charAt(0).toUpperCase(), ...str.slice(1)].join('');
    return [str, ...capitalizeFirst(arr.slice(1))];
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']



/*
    The surprising thing I noticed is
    str[0] = str.charAt(0).toUpperCase() did not change the original string str
    so that's why I had to destructure

    Author
    function capitalizeFirst (array) {
        if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
        }
        const res = capitalizeFirst(array.slice(0, -1));
        const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
        res.push(string);
        return res;
    }
 */


