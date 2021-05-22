function someRecursive(arr, cb) {
    if (arr.length === 1) return cb(arr[0]);

    return cb(arr[0]) || someRecursive(arr.slice(1), cb);
}

someRecursive([4,6,8], val => val > 10);