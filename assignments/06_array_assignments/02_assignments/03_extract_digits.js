// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(123) => [1, 2, 3]
// extractDigits(-123) => [1, 2, 3]
// extractDigits(12.3) => [1, 2, 3]

function extractDigits(number) {
  const extractedDigits = [];
  let num = Math.floor(Math.abs(number));

  while (num > 0) {
    const remainder = num % 10;
    num = Math.floor(num / 10);
    extractedDigits.unshift(remainder);
  }

  return extractedDigits;
}

/********************* Test Framework *********************/

function areValuesMatching(array1, array2, index) {
  return array1[index] === array2[index];
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areValuesMatching(array1, array2, index)) {
      return false;
    }
  }

  return true;
}

function getMark(actual, expected) {
  return areEqual(actual, expected) ? '✅' : '❌';
}

function composeStatement() {
  return "\nExtract Digits := ";
}

function createResultMessage(expected, actual) {
  return "Expected : [" + expected + "] | Actual : [" + actual + "]\n";
}

function createMessage(number) {
  const inputSegment = "Number : " + number;

  return inputSegment + composeStatement();
}

function testExtractDigits(number, expected) {
  const actual = extractDigits(number);
  const mark = getMark(actual, expected);
  const message = createMessage(number);
  const result = createResultMessage(expected, actual);

  console.log(mark, message, result);
}

function testAll() {
  testExtractDigits(123, [1, 2, 3]);
  testExtractDigits(-123, [1, 2, 3]);
  testExtractDigits(+123, [1, 2, 3]);
  testExtractDigits(1231e2, [1, 2, 3, 1, 0, 0]);
  testExtractDigits(32.1, [3, 2, 1]); //not working from here
  testExtractDigits(0.123, [0, 1, 2, 3]);
  testExtractDigits(0, [0]);
  testExtractDigits(0.2, [0, 2]);
  testExtractDigits(2.0, [2, 0]);
}

testAll();