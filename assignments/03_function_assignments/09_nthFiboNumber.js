/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function nthFibonacciTerm(nthTerm) {
  let currentTerm = 0;
  let nextTerm = 1;

  for (let term = 1; term < nthTerm; term++) {
    const sumOfTerms = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = sumOfTerms;
  }

  return currentTerm;
}

function makeMessage(number, expected, actualResult) {
  const message = " nth Fibonacci term? " + number + " should be " + expected;

  return message + " and is " + actualResult;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testNthFibonacciTerm(number, expected) {
  const actualResult = nthFibonacciTerm(number);
  const isPassing = expected === actualResult;

  console.log(getmark(isPassing), makeMessage(number, expected, actualResult));
}

function testAll() {
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(10, 34);
}

testAll();