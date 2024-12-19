function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function makeMessage(number, expected, actual) {
  const message = "Factorial : " + number + " Expected : " + expected;

  return message + " Actual : " + actual;
}

function testFactorial(number, expected) {
  const actual = factorial(number);
  const isPassing = getMark(actual, expected);

  console.log(isPassing, makeMessage(number, expected, actual));
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(6, 720);
  testFactorial(10, 3628800);
  testFactorial(20, 2432902008176640000);
}

testAll();