// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 624;
// Print the square root of a
// Printing more than one output or printing anything other than square root might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// without formula
// let sqrtCandidate = 0;

// while (sqrtCandidate * sqrtCandidate <= a) {
//     sqrtCandidate++;
// }

// const squareRoot = sqrtCandidate - 1;

// console.log(squareRoot);

// tried with formula
const squareRoot = (a ** 0.5);

console.log(squareRoot);