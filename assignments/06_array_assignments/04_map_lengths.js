// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters

function countLength(word) {
  return word.length;
}

function mapLengths(words) {
  const wordsLengthList = [];

  for (let index = 0; index < words.length; index++) {
    wordsLengthList[index] = countLength(words[index]);
  }
  return wordsLengthList;
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
  return "\nMap Lengths := ";
}

function createResultMessage(expected, actual) {
  return "Expected : [" + expected + "] | Actual : [" + actual + "]\n";
}

function createMessage(words) {
  const inputSegment = "Array : [" + words + "]";

  return inputSegment + composeStatement();
}

function testMapLengths(words, expected) {
  const actual = mapLengths(words);
  const isPassing = getMark(actual, expected);
  const message = createMessage(words);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testMapLengths(["apple", "cat", "Four"], [5, 3, 4]);
  testMapLengths(["apple"], [5]);
  testMapLengths(["a"], [1]);
  testMapLengths([""], [0]);
  testMapLengths([" "], [1]);
  testMapLengths([], []);
}

testAll();