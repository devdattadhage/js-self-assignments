function multiply(multiplicant, multiplier) {
  if (multiplicant === 0 || multiplier === 0) {
    return 0;
  }

  return multiplicant + multiply(multiplicant, multiplier - 1);
}

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function makeMessage(number1, number2, expected, actual) {
  const message = "Multiplication of " + number1 + " And " + number2;
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testMultiply(number1, number2, expected) {
  const actual = multiply(number1, number2);
  const isPassing = getMark(actual, expected);

  console.log(isPassing, makeMessage(number1, number2, expected, actual));
}

function testAll() {
  testMultiply(2, 3, 6);
  testMultiply(2, 0, 0);
  testMultiply(0, 3, 0);
  testMultiply(0, 0, 0);
  testMultiply(5, 5, 25);
  testMultiply(101, 199, 20099);
}

testAll();