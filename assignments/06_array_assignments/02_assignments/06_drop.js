// Remove first n elements from the array
// drop([1, 2, 3], 1) => [2, 3]
// drop([1, 2, 3], 4) => []
// Do not modify the original array

function drop(array, nthTerm) {
  if (nthTerm >= array.length) {
    return [];
  }

  const slicedArray = [];

  for (let index = nthTerm; index < array.length; index++) {
    slicedArray.push(array[index]);
  }

  return slicedArray;
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
  return "\nDrop := ";
}

function createResultMessage(expected, actual) {
  return "Expected : [" + expected + "] | Actual : [" + actual + "]\n";
}

function createMessage(array, nthTerm) {
  const inputSegment = "Array : [" + array + "]\tNth Term : " + nthTerm;

  return inputSegment + composeStatement();
}

function testDrop(array, nthTerm, expected) {
  const actual = drop(array, nthTerm);
  const mark = getMark(actual, expected);
  const message = createMessage(array, nthTerm);
  const result = createResultMessage(expected, actual);

  console.log(mark, message, result);
}

function testAll() {
  testDrop([1, 2, 3], 1, [2, 3]);
  testDrop([1, 2, 3], 4, []);
  testDrop([1, 2, 3], 0, [1, 2, 3]);
  testDrop([], 4, []);
}

testAll();