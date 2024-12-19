/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function factorial(number) {
  let factorialOfNum = 1;

  for (let multiplier = 1; multiplier <= number; multiplier++) {
    factorialOfNum = factorialOfNum * multiplier;
  }

  return factorialOfNum;
}

function makeMessage(number, expected, actualResult) {
  const message = " Factorial of " + number + " should be " + expected;

  return message + " and is " + actualResult;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testFactorial(number, expected) {
  const actualResult = factorial(number);
  const isPassing = expected === actualResult;

  console.log(getmark(isPassing), makeMessage(number, expected, actualResult));
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
  testFactorial(5, 120);
}

testAll();