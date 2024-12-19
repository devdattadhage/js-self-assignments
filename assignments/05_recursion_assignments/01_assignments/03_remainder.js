function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function makeMessage(dividend, divisor, expected, actual) {
  const message = "Remainder of " + dividend + " divideBy " + divisor;
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testRemainder(dividend, divisor, expected) {
  const actual = remainder(dividend, divisor);
  const isPassing = getMark(actual, expected);
  const message = makeMessage(dividend, divisor, expected, actual);

  console.log(isPassing, message);
}

function testAll() {
  testRemainder(2, 2, 0);
  testRemainder(3, 2, 1);
  testRemainder(98, 2, 0);
  testRemainder(99, 2, 1);

  testRemainder(999, 12, 3);
  testRemainder(999, 998, 1);

  testRemainder(2, 99, 2);
  testRemainder(0, 99, 0);
  testRemainder(998, 999, 998);
}

testAll();