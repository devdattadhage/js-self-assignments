// concat the given arrays.
// concat([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]

function concat(array1, array2) {
  const concatedArray = [];

  for (let index = 0; index < array1.length; index++) {
    concatedArray.push(array1[index]);
  }

  for (let index = 0; index < array2.length; index++) {
    concatedArray.push(array2[index]);
  }

  return concatedArray;
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
  return "\nConcat := ";
}

function createResultMessage(expected, actual) {
  return "Expected : [" + expected + "] | Actual : [" + actual + "]\n";
}

function createMessage(array1, array2) {
  const inputSegment = "Array1 : [" + array1 + "]\tArray2 : [" + array2 + "]";

  return inputSegment + composeStatement();
}

function testConcat(array1, array2, expected) {
  const actual = concat(array1, array2);
  const mark = getMark(actual, expected);
  const message = createMessage(array1, array2);
  const result = createResultMessage(expected, actual);

  console.log(mark, message, result);
}

function testAll() {
  testConcat([1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]);
  testConcat([1, 2, 3], [], [1, 2, 3]);
  testConcat([], [4, 5, 6], [4, 5, 6]);
  testConcat([], [], []);
  testConcat(['a', 'b'], ['c', 'd'], ['a', 'b', 'c', 'd']);
  testConcat(['a'], [1], ['a', 1]);
}

testAll();