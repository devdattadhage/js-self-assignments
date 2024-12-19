// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "helllo";
const subString = "llo";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let subStringCount = 0;

for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
  let currentStrIndex = stringIndex;
  let subStrIndex = 0;
  let notFoundSubstr = true;

  while (string[currentStrIndex] === subString[subStrIndex] && notFoundSubstr) {
    currentStrIndex++;
    subStrIndex++;

    if (subStrIndex === subString.length) {
      subStringCount += 1;
      notFoundSubstr = false;
    }
  }
}

console.log(subStringCount);