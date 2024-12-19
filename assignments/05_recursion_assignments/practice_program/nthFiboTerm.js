function nthFiboTerm(nthTerm) {
  if (nthTerm === 1) {
    return 0;
  }
  if (nthTerm === 2) {
    return 1;
  }

  return nthFiboTerm(nthTerm - 1) + nthFiboTerm(nthTerm - 2);
}

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function makeMessage(nthTerm, expected, actual) {
  const message = "Nth Fiboterm : " + nthTerm + " Expected : " + expected;

  return message + " Actual : " + actual;
}

function testNthFiboTerm(nthTerm, expected) {
  const actual = nthFiboTerm(nthTerm);
  const isPassing = getMark(actual, expected);

  console.log(isPassing, makeMessage(nthTerm, expected, actual));
}

function testAll() {
  testNthFiboTerm(1, 0);
  testNthFiboTerm(2, 1);
  testNthFiboTerm(8, 13);
  testNthFiboTerm(25, 46368);
  testNthFiboTerm(30, 46368);
}

testAll();