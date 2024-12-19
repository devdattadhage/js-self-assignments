function matchAtPosition(string, otherString, index, subIndex) {
  if (subIndex === otherString.length) {
    return true;
  }
  if (string[index + subIndex] !== otherString[subIndex]) {
    return false;
  }

  return matchAtPosition(string, otherString, index, subIndex + 1);
}

function isSubStringPresent(string, otherString, index) {
  if (index > string.length - otherString.length) {
    return false;
  }
  if (matchAtPosition(string, otherString, index, 0)) {
    return true;
  }

  return isSubStringPresent(string, otherString, index + 1);
}

function isSubString(string, otherString) {
  if (otherString === '') {
    return false;
  }

  return isSubStringPresent(string, otherString, 0);
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function makeMessage(string, otherString, expected, actual) {
  const message = "String : '" + string + "' SubString : '" + otherString;
  const quoteSegment = "'\nIs SubString present ?  ";
  const resultSegment = "Expected : " + expected + " | Actual : " + actual;

  return message + quoteSegment + resultSegment + "\n";
}

function testIsSubString(string, otherString, expected) {
  const actual = isSubString(string, otherString);
  const isPassing = getMark(actual, expected);
  const message = makeMessage(string, otherString, expected, actual);

  console.log(isPassing, message);
}

function testAll() {
  testIsSubString('Hello', 'ello', true);
  testIsSubString('Hello', 'Help', false);
  testIsSubString('lllo', 'llo', true);
  testIsSubString('aaaa', 'aa', true);
  testIsSubString('Hello', '', false);
  testIsSubString('', 'Help', false);
  testIsSubString('', '', false);
}

testAll();