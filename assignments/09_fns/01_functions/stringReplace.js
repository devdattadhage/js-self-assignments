const replace = function (text, match, replacement) {
  const getChar = function (element) {
    return element === match ? replacement : element;;
  }

  return [...text].map(getChar).join('');
}

/* ************************ Testing Section **************************** */

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function composeStatement() {
  return "\n String Replace := ";
}

function createResultMessage(expected, actual) {
  return "\n Expected : '" + expected + "' | Actual : '" + actual + "'\n";
}

function createMessage(text, match, replacement) {
  const textSegment = "Text : '" + text + "'\tMatch : '" + match;
  const replaceSegment = "'\tReplacement : '" + replacement + "'";

  return textSegment + replaceSegment;
}

function testReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const mark = getMark(actual, expected);
  const message = createMessage(text, match, replacement);
  const result = createResultMessage(expected, actual);

  console.log(mark, message, result);
}

function testAll() {
  testReplace('a', 'a', 'b', 'b');
  testReplace('hello', 'e', 'a', 'hallo');
  testReplace('hello', 'z', 'a', 'hello');
  testReplace('hello', '', 'a', 'hello');
  testReplace('hello', 'l', '', 'heo');
  testReplace('', 'l', 'a', '');
}

testAll();
