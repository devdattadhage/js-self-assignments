/*
  Implement the below function that tells if a string is substring of another
  string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function matchAtPosition(string, subString, stringIndex) {
  for (let substrIndex = 0; substrIndex < subString.length; substrIndex++) {
    if (string[stringIndex + substrIndex] !== subString[substrIndex]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  if (subString === '') {
    return false;
  }

  for (let index = 0; index <= string.length - subString.length; index++) {
    if (matchAtPosition(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function makeMessage(string, subString, expected, actual) {
  const textSegment = "String : '" + string + "' subString : '" + subString;
  const resultSegment = "' Expected : " + expected + " Actual : " + actual;

  return textSegment + resultSegment;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testIsSubstring(string, subString, expected) {
  const actualResult = isSubstring(string, subString);
  const isPassing = expected === actualResult;
  const message = makeMessage(string, subString, expected, actualResult);

  console.log(getmark(isPassing), message);
}

function testAll() {
  testIsSubstring('ab', 'ab', true);
  testIsSubstring('ab', 'zb', false);
  testIsSubstring('aba baa', ' ba', true);
  testIsSubstring('', ' ba', false);
  testIsSubstring('ab', '', false);
  testIsSubstring('', '', false);
  testIsSubstring(' ', '', false);
}

testAll();