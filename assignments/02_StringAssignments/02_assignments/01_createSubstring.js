// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "this is a statement";
const start = 0;
const end = 2;
// Print the substring from the given string using start index and end index.
// If string = "this is a statement", start = 3 and end = 9, then print "s is a "
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let startIndex = start < 0 ? 0 : start;
const endIndex = end >= string.length ? string.length : end + 1;
let subString = "";

for (startIndex; startIndex < endIndex; startIndex++) {
  subString += string[startIndex];
}

console.log(subString);