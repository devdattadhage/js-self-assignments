// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
// do not modify input parameters

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

/********************* Test Framework *********************/

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function composeStatement() {
  return "\nAre Arrays Equal := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(array1, array2) {
  const inputSegment = "Array1 : [" + array1 + "]\tArray2 : [" + array2 + "]";

  return inputSegment + composeStatement();
}

function testAreEqual(array1, array2, expected) {
  const actual = areEqual(array1, array2);
  const isPassing = getMark(actual, expected);
  const message = createMessage(array1, array2);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testsForEmptyArrays() {
  testAreEqual([], [], true);
  testAreEqual([], [1, 3, 2], false);
  testAreEqual([1, 3, 2], [], false);
  testAreEqual([], ["a"], false);
  testAreEqual(["a"], [], false);
}

function testsForIntegerArrayInputs() {
  testAreEqual([1, 2, 3], [1, 2, 3], true);
  testAreEqual([1, 2], [1, 2, 3], false);
  testAreEqual([1, 2, 3], [1, 3, 2], false);
  testAreEqual([1], [1], true);
  testAreEqual([1], [2], false);
}

function testForStringArrayInputs() {
  testAreEqual(['a', 'b', 'c'], ['a', 'b', 'c'], true);
  testAreEqual(['a', 'b', 'c'], ['d', 'e', 'f'], false);
  testAreEqual([1, 'b', 3], [1, 'b', 3], true);
  testAreEqual([1, 'b', 3], [1, 'e', 3], false);
  testAreEqual(['1', 2, 3], [1, 2, 3], false);
}

function testAll() {
  testsForEmptyArrays();
  testsForIntegerArrayInputs();
  testForStringArrayInputs();
}

testAll();