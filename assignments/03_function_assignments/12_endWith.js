/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function matchAtPosition(string, substring, index) {
  for (let subIndex = 0; subIndex < substring.length; subIndex++) {
    if (string[index + subIndex] !== substring[subIndex]) {
      return false;
    }
  }

  return true;
}

function endsWith(string, substring) {
  const index = string.length - substring.length;

  return matchAtPosition(string, substring, index);
}

function makeMessage(string, substring, expected, actual) {
  const stringSegment = "In string: '" + string;
  const substringSegment = "' | Is it ending with: '" + substring;
  const resultSegment = "' | Expected: " + expected + " | Actual: " + actual;

  return stringSegment + substringSegment + resultSegment;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testEndsWith(string, substring, expected) {
  const actual = endsWith(string, substring);
  const isPassing = expected === actual;
  const message = makeMessage(string, substring, expected, actual);

  console.log(getmark(isPassing), message);
}

function testAll() {
  testEndsWith('hello', 'lo', true);
  testEndsWith('hello', 'lz', false);
  testEndsWith('hello', 'hello', true);
  testEndsWith('hello', '', true);
  testEndsWith('hello', ' ', false);
  testEndsWith('hello world', 'hello', false);
  testEndsWith('hello world', 'world', true);
  testEndsWith('', 'lz', false);
  testEndsWith('', '', true);
}

testAll();