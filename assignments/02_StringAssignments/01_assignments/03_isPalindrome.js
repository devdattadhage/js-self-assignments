// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "ab";
// Print true if the given string is palindrome otherwise false
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let reverseString = "";

for (let index = 0; index < string.length; index++) {
  reverseString = string[index] + reverseString;
}

const isPalindrome = string === reverseString;

console.log(isPalindrome);


// let leftIndex = -1;
// let rightIndex = string.length;

// while (string[leftIndex] === string[rightIndex] && leftIndex <= rightIndex) {
//     leftIndex++;
//     rightIndex--;
// }

// console.log(leftIndex >= rightIndex);