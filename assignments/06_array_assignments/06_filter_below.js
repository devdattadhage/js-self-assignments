// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters

function filterBelow(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
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
  return "\nFilter Below := ";
}

function createResultMessage(expected, actual) {
  return "Expected : [" + expected + "] | Actual : [" + actual + "]\n";
}

function createMessage(array, threshold) {
  const inputSegment = "Array : [" + array + "] ThresHold : " + threshold;

  return inputSegment + composeStatement();
}

function testFilterBelow(array, threshold, expected) {
  const actual = filterBelow(array, threshold);
  const isPassing = getMark(actual, expected);
  const message = createMessage(array, threshold);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testFilterBelow([6, 2, 3, 1, 4, 7], 3, [2, 1]);
  testFilterBelow([1, 2, 3], 0, []);
  testFilterBelow([1, 2, 3], 4, [1, 2, 3]);
  testFilterBelow([-1, -2, -3], -2, [-3]);
  testFilterBelow([1], 1, []);
  testFilterBelow([], 1, []);
}

testAll();