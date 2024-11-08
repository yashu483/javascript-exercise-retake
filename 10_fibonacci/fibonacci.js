const fibonacci = function (position) {
    if (position == 0) {return 0 ;} ;
    if (position < 0) { return "OOPS" };
    if (typeof position === "string") {
        position = parseInt(position);
    };

    let first = 0;
    let second = 1;
    let result;
    for (let i = 0; i < position; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return first ;
};

// Do not edit below this line
module.exports = fibonacci;
