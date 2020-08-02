function capitalise (str) {
    // converitng string to lowercase and splitting the string to array
    // space beteen double quote inside split make sure words are
    // seperated in array and not the letters
    str = str.toLowerCase().split(" ");
    
    // loop through array 'str' and will be used to access individual index
    // 
    for (i = 0; i < str.length; i++) {
        // first will access index 1 of string eg: str[0]
        
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }

    return str.join(' ');

}

console.log(capitalise("Quite a Long SENTENCE!"));