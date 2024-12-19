function isStringSymetric(string, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return true;
  }
  if (string[leftIndex] !== string[rightIndex]) {
    return false;
  }

  return isStringSymetric(string, leftIndex + 1, rightIndex - 1);
}

function isPalindrome(palindromeCandidate) {
  const leftIndex = 0;
  const rightIndex = palindromeCandidate.length - 1;

  return isStringSymetric(palindromeCandidate, leftIndex, rightIndex);
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function makeMessage(palindromeCandidate, expected, actual) {
  const message = "'" + palindromeCandidate + "' Is Palindrome ? ";
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testIsPalindrome(palindromeCandidate, expected) {
  const actual = isPalindrome(palindromeCandidate);
  const isPassing = getMark(actual, expected);
  const message = makeMessage(palindromeCandidate, expected, actual);

  console.log(isPassing, message);
}

function testAll() {
  testIsPalindrome('ab131ba', true);
  testIsPalindrome('12321', true);
  testIsPalindrome('12345', false);
  testIsPalindrome('12341', false);
  testIsPalindrome('     ', true);
  testIsPalindrome('12', false);
  testIsPalindrome('1', true);
  testIsPalindrome('', true);
}

testAll();