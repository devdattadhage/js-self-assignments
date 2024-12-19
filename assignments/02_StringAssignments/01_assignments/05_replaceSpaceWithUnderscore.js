// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = " ab cd ef ";
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let stringWithUnderscores = "";
const SPACE = " ";
const UNDERSCORE = "_";

for (let index = 0; index < string.length; index++) {
  const characterAtIndex = string[index] === SPACE ? UNDERSCORE : string[index];
  stringWithUnderscores += characterAtIndex;
}

console.log(stringWithUnderscores);