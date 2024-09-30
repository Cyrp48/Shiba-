// index.js

const { formatString, combineStrings } = require('./stringhlp');

const string1 = "   Hello "; //your text 
const string2 = "World!   ";

console.log("Formatted String:", formatString(string1)); // Output: "HELLO"
console.log("Combined Strings:", combineStrings(string1, string2)); // Output: "HelloWorld!"
