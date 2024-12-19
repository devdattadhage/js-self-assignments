// Given an array of numbers true if numbers are in strictly descending order
// otherwise false.
// isStrictlyDescending([5, 4, 2, 1]) => true
// isStrictlyDescending([5, 4, 6, 1]) => false
// isStrictlyDescending([5, 4, 4, 1]) => false

function isStrictlyDescending(numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] <= numbers[index + 1]) {
      return false;
    }
  }

  return true;
}

/********************* Test Framework *********************/

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function composeStatement() {
  return "\nAre Scrictly Descending := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(numbers) {
  const inputSegment = "Array1 : [" + numbers + "]";

  return inputSegment + composeStatement();
}

function testIsStrictlyDescending(numbers, expected) {
  const actual = isStrictlyDescending(numbers);
  const mark = getMark(actual, expected);
  const message = createMessage(numbers);
  const result = createResultMessage(expected, actual);

  console.log(mark, message, result);
}

function testAll() {
  testIsStrictlyDescending([5, 4, 2, 1], true);
  testIsStrictlyDescending([5, 4, 6, 1], false);
  testIsStrictlyDescending([5, 4, 4, 1], false);
  testIsStrictlyDescending([1, 1], false);
  testIsStrictlyDescending([1, -1], true);
  testIsStrictlyDescending([-11, -1], false);
  testIsStrictlyDescending([1], true);
  testIsStrictlyDescending([], true);
}

testAll();