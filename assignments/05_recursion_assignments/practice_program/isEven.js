function isEven(number) {
  if (number < 2) {
    return number === 0;
  }

  return isEven(number - 2);
}

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function makeMessage(number, expected, actual) {
  const message = "Is " + number + " Even ? ";
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testIsEven(number, expected) {
  const actual = isEven(number);
  const isPassing = getMark(actual, expected);

  console.log(isPassing, makeMessage(number, expected, actual));
}

function testAll() {
  testIsEven(2, true);
  testIsEven(0, true);
  testIsEven(3, false);
  testIsEven(1000, true);
  testIsEven(9999, false);
}

testAll();