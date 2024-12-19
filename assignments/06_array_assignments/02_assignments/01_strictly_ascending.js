// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

function isStrictlyAscending(numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] >= numbers[index + 1]) {
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
  return "\nAre Scrictly Ascending := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(numbers) {
  const inputSegment = "Array1 : [" + numbers + "]";

  return inputSegment + composeStatement();
}

function testIsStrictlyAscending(numbers, expected) {
  const actual = isStrictlyAscending(numbers);
  const mark = getMark(actual, expected);
  const message = createMessage(numbers);
  const result = createResultMessage(expected, actual);

  console.log(mark, message, result);
}

function testAll() {
  testIsStrictlyAscending([1, 3, 4, 5, 16], true);
  testIsStrictlyAscending([1, 3, 2, 4], false);
  testIsStrictlyAscending([1, 3, 3, 4], false);
  testIsStrictlyAscending([1, 1], false);
  testIsStrictlyAscending([-1, 1], true);
  testIsStrictlyAscending([1], true);
  testIsStrictlyAscending([], true);
}

testAll();