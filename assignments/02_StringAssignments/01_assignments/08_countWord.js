// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = '';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const stringWithAddedSpace = " " + string;
const SPACE = " ";
let wordCount = 0;

for (let index = 0; index < stringWithAddedSpace.length - 1; index++) {
  if (stringWithAddedSpace[index] === SPACE && stringWithAddedSpace[index + 1] !== SPACE) {
    wordCount += 1;
  }
}

console.log(wordCount);

/* Input             Expected Output
*  "abc bcd efg"            3
*  "abc bcd efg  "          3
*  "  abc bcd efg"          3
*  ""                       0
*
*/