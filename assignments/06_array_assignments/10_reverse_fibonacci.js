// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters

function reverseFibonacci(nthterm) {
  const reverseFiboSeries = [];
  let currentTerm = 0;
  let nextTerm = 1;

  for (let term = nthterm; term > 0; term--) {
    reverseFiboSeries[term - 1] = currentTerm;
    const sumOfTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = sumOfTerm;
  }

  return reverseFiboSeries;
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
  return "\n Reverse Fibonacci := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(term) {
  const inputSegment = "Term : " + term;

  return inputSegment + composeStatement();
}

function testReverseFibonacci(term, expected) {
  const actual = reverseFibonacci(term);
  const isPassing = getMark(actual, expected);
  const message = createMessage(term);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testReverseFibonacci(5, [3, 2, 1, 1, 0]);
  testReverseFibonacci(1, [0]);
  testReverseFibonacci(2, [1, 0]);
  testReverseFibonacci(3, [1, 1, 0]);
}

testAll();