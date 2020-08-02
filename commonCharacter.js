function commonCharacters(string1, string2) {
    commonArray = [];
     string1 = string1.split("");
     string2 = string2.split("");
    // let newString = [...string1, ...string2];

    for (let char of string1) {
        if string2.includes(char) {
            commonArray.push(char);

        }else {
            continue;
        }

    }
    return commonArray;
}

console.log(commonCharacters("Hello", "good"));