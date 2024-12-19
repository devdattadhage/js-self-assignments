// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters

function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

/********************* Test Framework *********************/

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function composeStatement() {
  return "\nFind Index := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(array, element) {
  const inputSegment = "Array : [" + array + "] Element : " + element;

  return inputSegment + composeStatement();
}

function testFindIndex(array, element, expected) {
  const actual = findIndex(array, element);
  const isPassing = getMark(actual, expected);
  const message = createMessage(array, element);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {  
  testFindIndex(["apple", "cake", "tea", "coffee", "tea"], "tea", 2);
  testFindIndex(["apple", "cake", "tea", "coffee", "tea"], "apple", 0);
  testFindIndex(["apple", "cake"], "mango", -1);
  testFindIndex(["apple", "cake"], "mango", -1);
  testFindIndex([1, 2, 3, 2, 5], 2, 1);
  testFindIndex([1, 2, "a"], 2, 1);
  testFindIndex([], 2, -1);
}

testAll();