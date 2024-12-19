// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters

function findLastIndex(array, element) {
  let lastIndex = -1;

  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      lastIndex = index;
    }
  }

  return lastIndex;
}

/********************* Test Framework *********************/

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function composeStatement() {
  return "\nFind Last Index := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(array, element) {
  const inputSegment = "Array : [" + array + "] Element : " + element;

  return inputSegment + composeStatement();
}

function testFindLastIndex(array, element, expected) {
  const actual = findLastIndex(array, element);
  const isPassing = getMark(actual, expected);
  const message = createMessage(array, element);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testFindLastIndex(["apple", "cake", "tea", "coffee", "tea"], "tea", 4);
  testFindLastIndex(["apple", "cake", "tea", "coffee", "tea"], "apple", 0);
  testFindLastIndex(["apple", "cake"], "mango", -1);
  testFindLastIndex(["apple", "cake"], "mango", -1);
  testFindLastIndex([1, 2, 3, 2, 5], 2, 3);
  testFindLastIndex([1, 2, "a"], 2, 1);
  testFindLastIndex([1, 2, 2, 2, 2], 2, 4);
  testFindLastIndex([], 2, -1);
}

testAll();