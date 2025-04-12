const removeFromArray = function() {
    let array = [];
    if (arguments.length <= 1 || typeof arguments[0] !== "object") {
        throw new Error("Wrong use of functions");
    }

    array = arguments[0];
    if (array === undefined || array === null || array.length === 0) {
        return array;
    }

    const result = [];
    const elementsToRemove = [...arguments];
    elementsToRemove.shift();

    for (let i = 0; i < array.length; i++) {
        if (elementsToRemove.find((element) => element === array[i]) === undefined) {
            result.push(array[i]);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
