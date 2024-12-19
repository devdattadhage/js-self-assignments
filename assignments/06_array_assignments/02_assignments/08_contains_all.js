// Return true if all elements are present in the array regardless of their
// order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false

function isElementpresent(element, array) {
  for (let index = 0; index < array.length; index++) {
    if (element === array[index]) {
      return true;
    }
  }

  return false;
}

function containsAll(array, elements) {
  for (let index = 0; index < elements.length; index++) {
    if (!isElementpresent(elements[index], array)) {
      return false;
    }
  }

  return true;
}

/********************* Test Framework *********************/

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function composeStatement() {
  return "\n Contains All := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(array, elements) {
  const inputSegment = "Array : [" + array + "]\tElements : [" + elements + "]";

  return inputSegment + composeStatement();
}

function testContainsAll(array1, array2, expected) {
  const actual = containsAll(array1, array2);
  const mark = getMark(actual, expected);
  const message = createMessage(array1, array2);
  const result = createResultMessage(expected, actual);

  console.log(mark, message, result);
}

function testAll() {
  testContainsAll([1, 2, 3], [2, 1], true);
  testContainsAll([1, 2, 3], [1, 1, 2, 3], true);
  testContainsAll([1, 2, 3], [2, 1, 4], false);
  testContainsAll([], [2, 3, 4], false);
  testContainsAll([1, 2, 3], [], true);
  testContainsAll([], [], true);
}

testAll();