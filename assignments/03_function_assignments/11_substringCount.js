/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function matchAtPosition(string, substring, index) {
  for (let substrIndex = 0; substrIndex < substring.length; substrIndex++) {
    if (string[index + substrIndex] !== substring[substrIndex]) {
      return false;
    }
  }

  return true;
}

function occurrences(string, substring) {
  if (substring === '') {
    return substringOccurrences;
  }

  let substringOccurrences = 0;
  
  for (let index = 0; index <= string.length - substring.length; index++) {
    if (matchAtPosition(string, substring, index)) {
      substringOccurrences++;
    }
  }

  return substringOccurrences;
}

function makeMessage(string, substring, expected, actual) {
  const stringSegment = "In string: '" + string;
  const substringSegment = "' | Count of substring: '" + substring;
  const resultSegment = "' | Expected: " + expected + " | Actual: " + actual;

  return stringSegment + substringSegment + resultSegment;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testOccurrences(string, substring, expected) {
  const actual = occurrences(string, substring);
  const isPassing = expected === actual;
  const message = makeMessage(string, substring, expected, actual);

  console.log(getmark(isPassing), message);
}

function testAll() {
  testOccurrences('hello', 'l', 2);
  testOccurrences('hello', 'z', 0);
  testOccurrences('llllo', 'l', 4);
  testOccurrences('llllo', 'll', 3);
  testOccurrences('hello', '', 0);
  testOccurrences('', 'a', 0);
  testOccurrences('', '', 0);
  testOccurrences('  ', ' ', 2);
}

testAll();