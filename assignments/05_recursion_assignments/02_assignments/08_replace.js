function getReplaceText(text, target, replacement, index) {
  if (index === text.length) {
    return '';
  }

  const char = text[index] === target ? replacement : text[index];

  return char + getReplaceText(text, target, replacement, index + 1);
}

function replace(text, target, replacement) {
  if (text === '') {
    return '';
  }

  return getReplaceText(text, target, replacement, 0);
}

/********************* Test Framework *********************/

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function createStatement() {
  return "\nAfter Text Repalcement := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(text, target, replacement) {
  const inputSegment = "Text : " + text + " | Target : " + target;
  const inputSegment2 = " | Replacement : " + replacement;

  return inputSegment + inputSegment2 + createStatement();
}

function testReplace(text, target, replacement, expected) {
  const actual = replace(text, target, replacement);
  const isPassing = getMark(actual, expected);
  const message = createMessage(text, target, replacement);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testReplace('hello', 'l', 'p', 'heppo');
  testReplace('hello', 'a', 'b', 'hello');
  testReplace('aabaa', 'a', 'z', 'zzbzz');
  testReplace('hello', '', 'z', 'hello');
  testReplace('hello', 'l', '', 'heo');
  testReplace('lllll', 'l', '_', '_____');
  testReplace('     ', 'a', 'z', '     ');
  testReplace('', 'a', 'z', '');
}

testAll();