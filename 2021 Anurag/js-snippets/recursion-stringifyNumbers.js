function stringifyNumbers(object) {
    // add whatever parameters you deem necessary - good luck!
    var newObj = {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            let element = object[key];
            if (typeof element === "object" && !Array.isArray(element)) {
                newObj[key] = stringifyNumbers(element);
            } else if (typeof element === "number") {
                newObj[key] = element.toString();
            } else {
                newObj[key] = element;
            }
        }
    }
    return newObj;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj);
console.log(obj);
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

/*
    I observed let element = object[key];
    allocates different space to element and changing element doeesn't change
    object[key]
*/