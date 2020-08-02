                        // Challange
// Use some array function(s) to count the even numbers in an arrayfunction countEvens(arr)
// const testNumbers = [1,2,3,4,5,6,7,8];
// console.log(countEvens(testNumbers));
// should return 4


// const countEvens = function (arr) {
//     return arr.filter(item => item % 2 === 0).length;
// }

// console.log(countEvens([1,2,3,4,5,6,7,8]));


// Example of callback function
// isiteven calculator

function isItEvenFinder(input) {
    return input % 2 === 0;
}

// filter will return true or flase depending on the condition of callback function
// isItEvenFinder
function countEvenNumbers(array) {
    const evens = array.filter(isItEvenFinder)
    return evens;
}


const testNumbers = [1,2,3,4,5,6,7,8];
console.log(countEvenNumbers(testNumbers));
