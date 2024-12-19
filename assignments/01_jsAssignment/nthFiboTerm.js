// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let secondPreviousTerm = 0;
let previousTerm = 1;
let currentTerm = 0;

for (let term = 1; term < n; term++) {
    currentTerm = secondPreviousTerm + previousTerm;
    secondPreviousTerm = previousTerm;
    previousTerm = currentTerm;
}

console.log(secondPreviousTerm);