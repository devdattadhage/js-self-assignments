// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters

function filterAbove(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
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
  return "\nFilter Above := ";
}

function createResultMessage(expected, actual) {
  return "Expected : [" + expected + "] | Actual : [" + actual + "]\n";
}

function createMessage(array, threshold) {
  const inputSegment = "Array : [" + array + "] ThresHold : " + threshold;

  return inputSegment + composeStatement();
}

function testFilterAbove(array, threshold, expected) {
  const actual = filterAbove(array, threshold);
  const isPassing = getMark(actual, expected);
  const message = createMessage(array, threshold);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testFilterAbove([6, 2, 3, 1, 4, 7], 3, [6, 4, 7]);
  testFilterAbove([1, 2, 3], 4, []);
  testFilterAbove([1, 2, 3], 0, [1, 2, 3]);
  testFilterAbove([-1, 2, 3], -2, [-1, 2, 3]);
  testFilterAbove([1], 1, []);
  testFilterAbove([], 1, []);
}

testAll();