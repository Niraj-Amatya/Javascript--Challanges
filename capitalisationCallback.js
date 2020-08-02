/*
Create a function called capitalise that will take a string 
as an argument. 
In this function, use your favourite loop to capitalise the 
first letter of each word, and make each other letter lowercase.

E.g. capitalise("sinGLE"), should return “Single”

E.g. capitalise("TWO words"), should return “Two Words”

E.g. capitalise("Quite a Long SENTENCE!"), 
should return “Quite A Long Sentence!”
*/


// create a machine to capitalise only first letter of a word
function capitaliseFirstLetterOfWord (word) {
     const lowerCaseWord = word.toLowerCase();
     const capitalisedWord = lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.substring(1);
     return capitalisedWord;
}


function capitalise (sentence) {
    // splits sentence into array of words and space in split(" ") will split word
     const splitSentence = sentence.split(" ");
    //  loop through the splitsentence using map method/function 
    // and use callback function: capitaliseFirstLetterOfWord
    // to capitalise all first letter of word
     const capitalised = splitSentence.map(word => capitaliseFirstLetterOfWord (word));
     return capitalised.join(' ');

}

console.log(capitalise("Quite a Long SENTENCE!"));






