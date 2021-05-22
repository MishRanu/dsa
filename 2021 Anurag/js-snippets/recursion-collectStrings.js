function collectStrings(object) {
    // add whatever parameters you deem necessary - good luck!
    var arr = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            let element = object[key];
            if (typeof element === "object" && !Array.isArray(element)) {
                arr.push(...collectStrings(element));
            } else if (typeof element === "string") {
                arr.push(element);
            }
        }
    }
    return arr;
}