// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array

function dropLast(array, nthTerm) {
  if (nthTerm >= array.length) {
    return [];
  }

  const slicedArray = [];

  for (let index = 0; index < array.length - nthTerm; index++) {
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
  return "\nDrop Last:= ";
}

function createResultMessage(expected, actual) {
  return "Expected : [" + expected + "] | Actual : [" + actual + "]\n";
}

function createMessage(array, nthTerm) {
  const inputSegment = "Array : [" + array + "]\tNth Term : " + nthTerm;

  return inputSegment + composeStatement();
}

function testDropLast(array, nthTerm, expected) {
  const actual = dropLast(array, nthTerm);
  const mark = getMark(actual, expected);
  const message = createMessage(array, nthTerm);
  const result = createResultMessage(expected, actual);

  console.log(mark, message, result);
}

function testAll() {
  testDropLast([1, 2, 3], 1, [1, 2]);
  testDropLast([1, 2, 3], 4, []);
  testDropLast([1, 2, 3], 0, [1, 2, 3]);
  testDropLast([], 4, []);
}

testAll();