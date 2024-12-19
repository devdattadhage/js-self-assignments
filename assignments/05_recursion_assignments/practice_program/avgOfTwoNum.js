function division(dividend, divisor, quotient) {
  if (dividend <= 0) {
    return dividend === 0 ? quotient : quotient - 0.5;
  }
  quotient++;

  return division(dividend - divisor, divisor, quotient);
}

function avgOfTwoNum(number1, number2) {
  const sumOftwoNum = number1 + number2;
  const quotient = 0;

  return division(sumOftwoNum, 2, quotient); 
}

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function makeMessage(number1, number2, expected, actual) {
  const message = "Average of " + number1 + " And : " + number2;
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testAvgOfTwoNum(number1, number2, expected) {
  const actual = avgOfTwoNum(number1, number2);
  const isPassing = getMark(actual, expected);

  console.log(isPassing, makeMessage(number1, number2, expected, actual));
}

function testAll() {
  testAvgOfTwoNum(10, 20, 15);
  testAvgOfTwoNum(2, 3, 2.5);
  testAvgOfTwoNum(22, 9, 15.5);
  testAvgOfTwoNum(11, 11, 11);
  testAvgOfTwoNum(10, 0, 5);
  testAvgOfTwoNum(0, 10, 5);
  testAvgOfTwoNum(0, 0, 0);
}

testAll();