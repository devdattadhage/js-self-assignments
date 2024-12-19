// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "  abc   def";
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let stringWithoutDuplicateSpaces = "";
const SPACE = " ";

for (let index = 0; index < string.length - 1; index++) {
    const isDuplicateSpace = string[index] === SPACE && string[index + 1] === SPACE;
    
    if(!isDuplicateSpace) {
        stringWithoutDuplicateSpaces = stringWithoutDuplicateSpaces + string[index];
    }
}

console.log(stringWithoutDuplicateSpaces);