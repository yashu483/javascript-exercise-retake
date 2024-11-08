const findTheOldest = function (array) {

    function getOldestPeople(item) {
        if (item.yearOfDeath === undefined) {
            item.yearOfDeath = new Date().getFullYear();
        };
        if ((item.yearOfDeath - item.yearOfBirth) === Math.max(
            array[0].yearOfDeath - array[0].yearOfBirth,
            array[1].yearOfDeath - array[1].yearOfBirth,
            array[2].yearOfDeath - array[2].yearOfBirth,

        )
        ) {
            return true;
        }
        else { return false };

    };
    const isOldest = array.filter(getOldestPeople);
    return isOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
