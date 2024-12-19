// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters

function fibonacci(nthterm) {
  const fiboSeries = [];
  let currentTerm = 0;
  let nextTerm = 1;

  for (let term = 0; term < nthterm; term++) {
    fiboSeries[term] = currentTerm;
    const sumOfTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = sumOfTerm;
  }

  return fiboSeries;
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
  return "\nFibonacci := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(term) {
  const inputSegment = "Term : " + term;

  return inputSegment + composeStatement();
}

function testFibonacci(term, expected) {
  const actual = fibonacci(term);
  const isPassing = getMark(actual, expected);
  const message = createMessage(term);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testFibonacci(1, [0]);
  testFibonacci(2, [0, 1]);
  testFibonacci(3, [0, 1, 1]);
  testFibonacci(5, [0, 1, 1, 2, 3]);
}

testAll();