const reverseString = function(inputString) {
    if (inputString === undefined || inputString === null) throw new Error("Invalid string");

    if (inputString.length === 0) return inputString;

    const temp = [];
    let reversedString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
