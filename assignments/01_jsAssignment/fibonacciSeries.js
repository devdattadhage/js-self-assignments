// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;
// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let secondPreviousTerm = 0;
let previousTerm = 1;
let currentTerm = 0;

for (let term = 0; term < n; term++) {
    console.log(secondPreviousTerm);
    currentTerm = secondPreviousTerm + previousTerm;
    secondPreviousTerm = previousTerm;
    previousTerm = currentTerm;
}