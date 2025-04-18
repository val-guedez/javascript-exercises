const sumAll = function(num1, num2) {
    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return 'ERROR';
    }

    if (num1 % 1 !== 0 || num2 % 1 !== 0) {
        return 'ERROR';
    }

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if (num1 === num2) return num1;

    const min = num1 < num2 ? num1 : num2;
    const max = num2 > num1 ? num2 : num1;

    result = 0;

    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
