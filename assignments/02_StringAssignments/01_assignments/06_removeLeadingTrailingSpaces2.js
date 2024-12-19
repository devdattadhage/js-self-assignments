// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "  ab cd  ";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let stringWithoutLeadingTrailingSpaces = "";
let firstCharacter = 0;
let lastCharacter = string.length - 1;
const SPACE = " ";

while (string[lastCharacter] === SPACE) {
    lastCharacter--;
}

while (string[firstCharacter] === SPACE) {
    firstCharacter++;
}

for (let index = firstCharacter; index < lastCharacter + 1; index++) {
    stringWithoutLeadingTrailingSpaces = stringWithoutLeadingTrailingSpaces + string[index];
}

console.log(stringWithoutLeadingTrailingSpaces);