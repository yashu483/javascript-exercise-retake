const sumAll = function (first, second) {
    if (typeof first !== "number" ||
        typeof second !== "number" ||
        !Number.isInteger(first) ||
        !Number.isInteger(second) ||
        first < 0 ||
        second < 0
    ) {
        return "ERROR";
    }

    let bigNum = Math.max(first, second);
    let smallNum = Math.min(first, second);

    let sum = 0;

    for (smallNum; smallNum <= bigNum; smallNum++) {
        sum += smallNum ;
    }
    return sum ;
};

// Do not edit below this line
module.exports = sumAll;
