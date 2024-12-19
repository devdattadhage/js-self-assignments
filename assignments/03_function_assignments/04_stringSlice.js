/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

function slice(text, start, end) {
  let subString = "";
  const startIndex = max(start, 0);
  const endIndex = min(end, text.length - 1);

  for (let index = startIndex; index <= endIndex; index++) {
    subString += text[index];
  }

  return subString;
}

function makeMessage(text, start, end, expected, actualResult) {
  const textSegment = "In '" + text + "' the O/P start from '";
  const indexSegment = start + "' to '" + end;
  const expectedSegment = "' Expected O/P : '" + expected;
  const actualSegment = "' Actual O/P : '" + actualResult + "'";

  return textSegment + indexSegment + expectedSegment + actualSegment;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testSlice(text, start, end, expected) {
  const actualResult = slice(text, start, end);
  const isPassing = expected === actualResult;
  const message = makeMessage(text, start, end, expected, actualResult);

  console.log(getmark(isPassing), message);
}

function testAll() {
  testSlice('hello world', 0, 4, 'hello');
  testSlice('hello world', -2, 4, 'hello');
  testSlice('hello world', 6, 15, 'world');
  testSlice('hello world', 0, 0, 'h');
  testSlice('hello world', 6, 3, '');
  testSlice('', 0, 5, '');
  testSlice('hello world', 0, 10, 'hello world');
}

testAll();