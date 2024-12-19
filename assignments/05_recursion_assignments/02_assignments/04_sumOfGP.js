function sumOfGP(firstTerm, ratio, nTerm) {
  if (nTerm < 1) {
    return 0;
  }

  return firstTerm + sumOfGP(firstTerm * ratio, ratio, nTerm - 1);
}

/********************* Test Framework *********************/

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function createStatement() {
  return "\nSum Of GP := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(firstTerm, ratio, nTerm) {
  const inputSegment = "First Term : " + firstTerm + " | Ratio : " + ratio;
  const inputSegment2 = " | N Term : " + nTerm;

  return inputSegment + inputSegment2 + createStatement();
}

function testSumOfGP(firstTerm, ratio, nTerm, expected) {
  const actual = sumOfGP(firstTerm, ratio, nTerm);
  const isPassing = getMark(actual, expected);
  const message = createMessage(firstTerm, ratio, nTerm);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testSumOfGP(2, 2, 4, 30);
  testSumOfGP(1, 1, 1, 1);
  testSumOfGP(2, 2, 2, 6);
  testSumOfGP(0, 2, 4, 0);
  testSumOfGP(2, 0, 4, 2);
  testSumOfGP(2, 2, 0, 0);
  testSumOfGP(0, 0, 0, 0);
}

testAll();