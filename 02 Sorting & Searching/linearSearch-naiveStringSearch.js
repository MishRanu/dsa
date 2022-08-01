
function naiveStringSearch(long, short) {
    let count = 0;
    let i = 0;
    let j = 0;

    while (i < long.length) {
        if (long[i] === short[j]) {
            j++;
        } else {
            j = 0;
        }

        if (j === short.length) {
            j = 0;
            count = count + 1;
        }

        i++;
    }

    return count;
}