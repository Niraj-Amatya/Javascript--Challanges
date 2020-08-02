// 1. Add 1

// Write a function called addOne that takes an array of numbers and returns an array with each number incremented by 1.

// E.g. addOne([1,2,3]), should return [2,3,4]

function addOne (array) {
    
    newArray = [];
    for (let i of array) {
        newArray.push(i += 1);
    }
    return newArray;  
}

console.log(addOne([2,3,5]));