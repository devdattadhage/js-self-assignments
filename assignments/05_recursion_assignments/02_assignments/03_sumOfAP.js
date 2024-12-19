function sumOfAP(firstTerm, diff, NTerms) {
  if (NTerms < 2) {
    return NTerms === 0 ? 0 : firstTerm;
  }

  return firstTerm + sumOfAP(firstTerm + diff, diff, NTerms - 1);
}

/********************* Test Framework *********************/

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function createStatement() {
  return "\nSum Of AP := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(firstTerm, diff, NTerms) {
  const inputSegment = "First Term : " + firstTerm + " | Difference : " + diff;
  const inputSegment2 = " | NTerms : " + NTerms;

  return inputSegment + inputSegment2 + createStatement();
}

function testSumOfAP(firstTerm, diff, NTerms, expected) {
  const actual = sumOfAP(firstTerm, diff, NTerms);
  const isPassing = getMark(actual, expected);
  const message = createMessage(firstTerm, diff, NTerms);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testSumOfAP(2, 3, 5, 40);
  testSumOfAP(0, 3, 5, 30);
  testSumOfAP(2, 0, 5, 10);
  testSumOfAP(1, 1, 1, 1);
  testSumOfAP(1, 1, 0, 0);
}

testAll();