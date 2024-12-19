function nthFibonacciTerm(nthTerm) {
  if (nthTerm < 2) {
    return 0;
  }
  if (nthTerm < 4) {
    return 1;
  }

  return nthFibonacciTerm(nthTerm - 1) + nthFibonacciTerm(nthTerm - 2);
}

/********************* Test Framework *********************/

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function createStatement() {
  return "\nNth Fiboterm := ";
}

function createResultMessage(expected, actual) {
  return  "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(nthTerm) {
  const inputSegment = "Nth Term : " + nthTerm;

  return inputSegment + createStatement();
}

function testNthFibonacciTerm(nthTerm, expected) {
  const actual = nthFibonacciTerm(nthTerm);
  const isPassing = getMark(actual, expected);
  const message = createMessage(nthTerm);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testNthFibonacciTerm(0, 0);
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(8, 13);
  testNthFibonacciTerm(25, 46368);
  testNthFibonacciTerm(30, 514229);
  // testNthFibonacciTerm(50, 7778742049);
}

testAll();