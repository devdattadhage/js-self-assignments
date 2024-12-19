const finalNumber = 100;

// sum of n natural numbers and then square
const sumOfNumbers = finalNumber * (finalNumber + 1) / 2;
const squareOfSumOfNumbers = sumOfNumbers * sumOfNumbers;

// sum of the square of the n natural numbers
// Σn^2 = [n(n+1)(2n+1)]/6
const sumOfSquareOfNumber = [finalNumber * (finalNumber + 1) * (2 * finalNumber + 1)] / 6;

// difference between squareOfSumOfNumbers and sumOfSquareOfNumber
const difference = squareOfSumOfNumbers - sumOfSquareOfNumber;

console.log(difference);