// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function isElementPresent(element, array) {
  for (let index = 0; index < array.length; index++) {
    if (element === array[index]) {
      return true;
    }
  }

  return false;
}

function difference(array1, array2) {
  const absentElementsArray = [];

  for (let index = 0; index < array1.length; index++) {
    if (!isElementPresent(array1[index], array2)) {
      absentElementsArray.push(array1[index]);
    }
  }

  return absentElementsArray;
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
  return "\nDifference := ";
}

function createResultMessage(expected, actual) {
  return "Expected : [" + expected + "] | Actual : [" + actual + "]\n";
}

function createMessage(array1, array2) {
  const inputSegment = "Array1 : [" + array1 + "]\tArray2 : [" + array2 + "]";

  return inputSegment + composeStatement();
}

function testDifference(array1, array2, expected) {
  const actual = difference(array1, array2);
  const mark = getMark(actual, expected);
  const message = createMessage(array1, array2);
  const result = createResultMessage(expected, actual);

  console.log(mark, message, result);
}

function testAll() {
  testDifference([1, 2, 3], [2, 3, 4], [1]);
  testDifference([1, 2, 3], [1, 3, 2], []);
  testDifference([], [2, 3, 4], []);
  testDifference([1, 2, 3], [], [1, 2, 3]);
  testDifference([], [], []);
}

testAll();