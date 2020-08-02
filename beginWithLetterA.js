

const firstLetterA = (array) => array.filter((word) => word.toLowerCase().charAt(0).includes("a"));

console.log(firstLetterA(["apple", "star", "Angel", "elephant", "asterisk"]));