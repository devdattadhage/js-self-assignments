// Do not rename it, use this as input for your program.
// While testing we will change its value.
const n = 4;
// print factorial of n.
// Do not print anything else. Printing more than one output or printing 
// anything other than factorial might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let factorial = 1;

for (let multiplier = 1; multiplier <= n; multiplier++) {
  factorial = factorial * multiplier;
}

console.log(factorial);

/* ------------------------------------------------------------------ */
/*
const range = function (from, to, steps) {
  const numbers = [];

  for (let i = from; i <= to; i += steps) {
    numbers.push(i);
  }

  return numbers;
}

const product = function (num1, num2) {
  return num1 * num2;
}

const factorial = function (initial, number) {
  initial.push(range(2, number, 1).reduce(product, 1));

  return initial;
}

const factorials = function (numbers) {
  return numbers.reduce(factorial, []);
}

console.log(factorials([0, 1, 2, 3, 4, 5, 6, 7]));

*/