function reverseOnlyWords (string) {
    return string.toLowerCase().split("").reverse().join("");
}


function reverseSentence (sentence, callback) {

    return sentence.split(" ").map(callback).join(" ")

}

console.log(reverseSentence("This is my world.", reverseOnlyWords));