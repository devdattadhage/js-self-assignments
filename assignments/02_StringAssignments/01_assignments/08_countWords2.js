// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'abc ';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let wordCount = string[0] !== " " ? 1 : 0;

for (let index = 0; index < string.length; index++) {
  if (string[index] === " " && (string[index + 1] !== " " && string[index + 1] !== undefined)) {
    wordCount += 1;
  }
}

if (string === "") {
  wordCount = 0;
}

console.log(wordCount);

/* Input             Expected Output
*  "abc bcd efg"            3
*  "abc bcd efg  "          3
*  "  abc bcd efg"          3
*  ""                       0
*
*/