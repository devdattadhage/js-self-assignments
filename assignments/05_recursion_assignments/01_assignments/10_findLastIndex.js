function getLastIndex(string, char, index) {
  if (index === -1) {
    return -1;
  }
  if (string[index] === char) {
    return index;
  }

  return getLastIndex(string, char, index - 1);
}

function findLastIndex(string, char) {
  return getLastIndex(string, char, string.length);
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function makeMessage(string, char, expected, actual) {
  const message = "String : '" + string + "' Char : '" + char;
  const quoteSegment = "'\nIndex Of Char :=  ";
  const resultSegment = "Expected : " + expected + " | Actual : " + actual;

  return message + quoteSegment + resultSegment + "\n";
}

function testFindLastIndex(string, char, expected) {
  const actual = findLastIndex(string, char);
  const isPassing = getMark(actual, expected);
  const message = makeMessage(string, char, expected, actual);

  console.log(isPassing, message);
}

function testAll() {
  testFindLastIndex('Hello', 'l', 3);
  testFindLastIndex('Hello', 'e', 1);
  testFindLastIndex('Hello', 'D', -1);
  testFindLastIndex('Hello', ' ', -1);
  testFindLastIndex('     ', ' ', 4);
  testFindLastIndex('Hello', '', -1);
  testFindLastIndex('', 'A', -1);
  testFindLastIndex('', '', -1);
}

testAll();