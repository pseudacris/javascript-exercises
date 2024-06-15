// let someArray = [1, 2, 3, 4];

// const removeFromArray = function(value, index, arr) {
//    if (value === 2) {
//     arr.splice(index, 1);
//     return true;
//    }
//    return false;
// }    
// someArray.filter(removeFromArray());

const removeFromArray = function(array, ...args) {
   return array.filter(val => !args.includes(val))
}
// Do not edit below this line
module.exports = removeFromArray;
