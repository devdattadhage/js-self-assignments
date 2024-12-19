function isSpace(char) {
  return char === " ";
}

function convertStringToNumber(string, index, number) {
  const currentDigit = +string[index];

  if (index === string.length) {
    return number;
  }
  if (isNaN(currentDigit) || isSpace(string[index])) {
    return NaN;
  }

  number = number * 10 + currentDigit;

  return convertStringToNumber(string, index + 1, number);
}

function stringToNumber(string) {
  if (string === '') {
    return NaN;
  }
  if (string[0] === '-') {
    return -1 * convertStringToNumber(string, 1, 0);
  }
  if (string[0] === '+') {
    return convertStringToNumber(string, 1, 0);
  }

  return convertStringToNumber(string, 0, 0);
}

/********************* Test Framework *********************/

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function createStatement() {
  return "\nConverting to Number := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(string) {
  const inputSegment = "String : '" + string;

  return inputSegment + createStatement();
}

function testStringToNumber(string, expected) {
  const actual = stringToNumber(string);
  const isPassing = getMark(actual, expected);
  const message = createMessage(string);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testStringToNumber('123', 123);
  testStringToNumber('1234', 1234);
  testStringToNumber('1001', 1001);
  testStringToNumber('0001', 1);
  testStringToNumber('-123', -123);
  testStringToNumber('+123', 123);
  testStringToNumber('-12x', NaN);
  testStringToNumber('-12x', NaN);
  testStringToNumber('123a', NaN);
  testStringToNumber('abcd', NaN);
  testStringToNumber('    ', NaN);
  testStringToNumber('', NaN);
}

testAll();