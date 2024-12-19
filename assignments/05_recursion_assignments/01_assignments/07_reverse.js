function getReverse(string, index) {
  if (index <= 0) {
    return index === 0 ? string[0] : "";
  }

  return string[index] + getReverse(string, index - 1);
}

function reverse(string) {
  const index = string.length - 1;

  return getReverse(string, index);
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function makeMessage(string, expected, actual) {
  const message = "'" + string + "' Do Reverse ? ";
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testReverse(string, expected) {
  const actual = reverse(string);
  const isPassing = getMark(actual, expected);
  const message = makeMessage(string, expected, actual);

  console.log(isPassing, message);
}

function testAll() {
  testReverse('abcd', 'dcba');
  testReverse('aaaa', 'aaaa');
  testReverse('ab c', 'c ba');
  testReverse('    ', '    ');
  testReverse('a', 'a');
  testReverse('', '');
}

testAll();