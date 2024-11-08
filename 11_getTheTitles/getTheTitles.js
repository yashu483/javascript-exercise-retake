const getTheTitles = function(array) {
let bookNames = [] ;

array.map((item) => {
    bookNames.push(item.title) ;
})
return bookNames ;
};

// Do not edit below this line
module.exports = getTheTitles;
