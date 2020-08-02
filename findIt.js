function findIt (arrayString, matchString) {
    match_array = [];

    for (let char of arrayString) {
        if (char.match(matchString)) {
             match_array.push(char);
        }
        
    }
    return match_array;
}

console.log(findIt(["one", "two", "bone"], "on"))