const palindromes = function (string) {
let removedString = string.replace(/[\W_]+/g, "").toLowerCase() ;
let stringReversed = string.split("").reverse().join("") ;

if (removedString === stringReversed) { return true ;} 
else { return false ;}
};

// Do not edit below this line
module.exports = palindromes;
