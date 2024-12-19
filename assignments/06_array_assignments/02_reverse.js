// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters

function reverse(array) {
  const reversedArray = [];

  for (let index = 0; index < array.length; index++) {
    reversedArray[array.length - 1 - index] = array[index];
  }

  return reversedArray;
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
  return "\nArray Reverse := ";
}

function createResultMessage(expected, actual) {
  return "Expected : [" + expected + "] | Actual : [" + actual + "]\n";
}

function createMessage(array1) {
  const inputSegment = "Array1 : [" + array1 + "]";

  return inputSegment + composeStatement();
}

function testReverse(array, expected) {
  const actual = reverse(array);
  const isPassing = getMark(actual, expected);
  const message = createMessage(array);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testReverse([], []);
  testReverse([1], [1]);
  testReverse([1, 2, 3], [3, 2, 1]);
  testReverse(['a', 'b', 'c'], ['c', 'b', 'a']);
  testReverse([1, 'b', 3], [3, 'b', 1]);
  testReverse(['hello'], ['hello']);
  testReverse([1, 2, 3, 4], [4, 3, 2, 1]);
  testReverse([1, 2], [2, 1]);
}

testAll();