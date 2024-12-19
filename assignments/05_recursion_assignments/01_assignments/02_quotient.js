function quotient(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + quotient(dividend - divisor, divisor);
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function makeMessage(dividend, divisor, expected, actual) {
  const message = "Quotient of " + dividend + " divideBy " + divisor;
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testQuotient(dividend, divisor, expected) {
  const actual = quotient(dividend, divisor);
  const isPassing = getMark(actual, expected);
  const message = makeMessage(dividend, divisor, expected, actual);

  console.log(isPassing, message);
}

function testAll() {
  testQuotient(2, 2, 1);
  testQuotient(0, 2, 0);

  testQuotient(2, 12, 0);
  testQuotient(11, 99, 0);
  testQuotient(1, 999, 0);

  testQuotient(12, 2, 6);
  testQuotient(13, 2, 6);
}

testAll();