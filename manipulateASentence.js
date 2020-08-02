// create a function that will take a string and will manipulate by either reversing it 
// or capitalising the first letter of each word in a sentence


// Reverse a word
function reverseWord (word) {
    const splitWord = word.split('');
    return allReversedWord = splitWord.reverse().join('');
}

// capitalise word
function capitaliseWord (word) {
    lowercaseWord = word.toLowerCase();
    return lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.substring(1);
} 

// function for callback, takes to params callback and sentence
// callback will take two arguments: reverse function or capitalise word
function manipulateSentence (callback, sentence) {
    const splitedSentence = sentence.split(" ");
    const alteredSentence = splitedSentence.map(callback);
    return alteredSentence.join(' ');

}


// passed reverseWord function to the manipulateSentence callback params
console.log(manipulateSentence(reverseWord, "I like my kids!"));

// passed capitaliseWord function to the manipulateSentence callback params
console.log(manipulateSentence(capitaliseWord, "I like my kids!"));