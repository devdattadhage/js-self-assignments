function __slice(string, start, end) {
  if (start === end) {
    return string[start];
  }

  return string[start] + __slice(string, start + 1, end);
}

function max(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function min(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function slice(string, start, end) {
  start = max(start, 0);
  end = min(end, string.length - 1);

  if (string === "") {
    return "";
  }

  return __slice(string, start, end);
}

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function makeMessage(string, start, end, expected, actual) {
  const message = string + " | start : " + start + " | end : " + end;
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testSlice(string, start, end, expected) {
  const actual = slice(string, start, end);
  const isPassing = getMark(actual, expected);

  console.log(isPassing, makeMessage(string, start, end, expected, actual));
}

function testAll() {
  testSlice("Hello", 1, 3, "ell");
  testSlice("Hello", 0, 4, "Hello");
  testSlice("Hello", 0, 0, "H");
  testSlice("Hello", -3, 4, "Hello");
  testSlice("Hello", 0, 9, "Hello");
  testSlice("", 0, 5, "");
}

testAll();