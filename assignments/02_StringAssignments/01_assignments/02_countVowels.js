// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'Abcdef';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let vowelsCount = 0;

for (let index = 0; index < string.length; index++) {
  const vowels = "aeiouAEIOU";
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    if (vowels[vowelIndex] === string[index]) {
      vowelsCount++;
    }
  }
}

console.log(vowelsCount);