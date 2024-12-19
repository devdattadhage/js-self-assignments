function getIndex(string, char, index) {
  if (index === string.length) {
    return -1;
  }
  if (string[index] === char) {
    return index;
  }

  return getIndex(string, char, index + 1);
}

function findIndex(string, char) {
  return getIndex(string, char, 0);
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

function testFindIndex(string, char, expected) {
  const actual = findIndex(string, char);
  const isPassing = getMark(actual, expected);
  const message = makeMessage(string, char, expected, actual);

  console.log(isPassing, message);
}

function testAll() {
  testFindIndex('Hello', 'H', 0);
  testFindIndex('Hello', 'o', 4);
  testFindIndex('Hello', 'D', -1);
  testFindIndex('Hello', ' ', -1);
  testFindIndex('     ', ' ', 0);
  testFindIndex('Hello', '', -1);
  testFindIndex('', 'A', -1);
  testFindIndex('', '', -1);
  testFindIndex('repeating iiiiii', 'z', -1);
}

testAll();