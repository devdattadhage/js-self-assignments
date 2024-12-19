function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

function getSliceText(text, start, end) {
  if (start === end) {
    return text[end];
  }

  return text[start] + getSliceText(text, start + 1, end);
}

function slice(text, start, end) {
  const startIndex = max(start, 0);
  const endIndex = min(end, text.length - 1);

  if (text === '' || startIndex > endIndex) {
    return '';
  }

  return getSliceText(text, startIndex, endIndex);
}

/********************* Test Framework *********************/

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function createStatement() {
  return "\nAfter Slice := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(text, start, end) {
  const inputSegment = "Text : " + text + " | Start : " + start;
  const inputSegment2 = " | End : " + end;

  return inputSegment + inputSegment2 + createStatement();
}

function testSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  const isPassing = getMark(actual, expected);
  const message = createMessage(text, start, end);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testSlice('hello', 1, 4, 'ello');
  testSlice('hello', 0, 4, 'hello');
  testSlice('hello', 1, 9, 'ello');
  testSlice('hello', -4, 4, 'hello');
  testSlice('hello', -4, 9, 'hello');
  testSlice('hello', -4, -2, '');
  testSlice('hello', 8, 9, '');
  testSlice('hello', 8, 4, '');
  testSlice('hello', 0, 0, 'h');
  testSlice('', 2, 5, '');
}

testAll();