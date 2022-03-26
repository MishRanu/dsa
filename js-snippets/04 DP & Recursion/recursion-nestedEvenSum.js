function nestedEvenSum(object) {
    // add whatever parameters you deem necessary - good luck!
    let sum = 0;
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            if (typeof element === "object" && !Array.isArray(element)) {
                sum += nestedEvenSum(element);
            } else if (typeof element === "number" && element % 2 === 0) {
                sum += element;
            }
        }
    }
    return sum;
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10