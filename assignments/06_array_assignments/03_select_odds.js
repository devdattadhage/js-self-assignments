// Given an array of numbers return a new array containing only odd elements of
// the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.

function isOdd(number) {
  return number % 2 !== 0;
}

function selectOdds(numbers) {
  const oddNumbers = [];

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      oddNumbers[oddNumbers.length] = numbers[index];
    }
  }

  return oddNumbers;
}

/********************* Test Framework *********************/

function areValuesMatching(array1, array2, index) {
  return array1[index] === array2[index];
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areValuesMatching(array1, array2, index)) {
      return false;
    }
  }

  return true;
}

function getMark(actual, expected) {
  return areEqual(actual, expected) ? '✅' : '❌';
}

function composeStatement() {
  return "\nSelect Odds := ";
}

function createResultMessage(expected, actual) {
  return "Expected : [" + expected + "] | Actual : [" + actual + "]\n";
}

function createMessage(numbers) {
  const inputSegment = "Array : [" + numbers + "]";

  return inputSegment + composeStatement();
}

function testSelectOdds(numbers, expected) {
  const actual = selectOdds(numbers);
  const isPassing = getMark(actual, expected);
  const message = createMessage(numbers);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testSelectOdds([2, 4, 6], []);
  testSelectOdds([3, 2, 4, 5, 7], [3, 5, 7]);
  testSelectOdds([3, 5, 7], [3, 5, 7]);
  testSelectOdds([], []);
  testSelectOdds([0], []);
  testSelectOdds([1], [1]);
}

testAll();