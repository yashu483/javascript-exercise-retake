// const removeFromArray = function (array , ...args) {
//     const newArray = [] ;

//     array.forEach(element => {
//         if ( !args.includes(element)) {
//             newArray.push(element) ;
//         }
//     });

//     return newArray ;
// }
const removeFromArray = function (array, first , second ,third , fourth) {

    function checkItems(item) {
        if (item === first || item === second || item === third || item === fourth) {
            return false
        }
        else { return true; }
    }
    const newArray = array.filter(checkItems) ;
    return newArray;
}; 

// Do not edit below this line
module.exports = removeFromArray;
