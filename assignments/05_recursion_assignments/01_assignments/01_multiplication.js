function multiply(multiplier, multiplicand) {
  if (multiplier === 0 || multiplicand === 0) {
    return 0;
  }

  return multiplier + multiply(multiplier, multiplicand - 1);
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function makeMessage(multiplier, multiplicand, expected, actual) {
  const message = "Multiplication of " + multiplier + " And " + multiplicand;
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testMultiply(multiplier, multiplicand, expected) {
  const actual = multiply(multiplier, multiplicand);
  const isPassing = getMark(actual, expected);
  const message = makeMessage(multiplier, multiplicand, expected, actual);

  console.log(isPassing, message);
}

function testSingleDigitMul() {
  testMultiply(2, 3, 6);
  testMultiply(2, 0, 0);
  testMultiply(0, 3, 0);
  testMultiply(0, 0, 0);
  testMultiply(5, 5, 25);
}

function testAll() {
  testSingleDigitMul();

  testMultiply(2, 99, 198);
  testMultiply(2, 999, 1998);
  testMultiply(99, 2, 198);
  testMultiply(999, 2, 1998);

  testMultiply(11, 99, 1089);
  testMultiply(101, 199, 20099);
  testMultiply(101, 999, 100899);
}

testAll();