// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'abcd';
// Reverse the given string
// If string = "reverse" then output should be "esrever"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let reverseString = "";

for (let index = 0; index < string.length; index++) {
  reverseString = string[index] + reverseString;
}

console.log(reverseString);