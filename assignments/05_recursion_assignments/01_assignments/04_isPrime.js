function isFactorPresent(primeCandidate, factor) {
  if (primeCandidate % factor === 0) {
    return false;
  }
  if (factor > primeCandidate ** 0.5) {
    return true;
  }

  return isFactorPresent(primeCandidate, factor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate <= 2) {
    return primeCandidate === 2;
  }

  return isFactorPresent(primeCandidate, 2);
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function makeMessage(primeCandidate, expected, actual) {
  const message = primeCandidate + " Is Prime ?";
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testIsPrime(primeCandidate, expected) {
  const actual = isPrime(primeCandidate);
  const isPassing = getMark(actual, expected);
  const message = makeMessage(primeCandidate, expected, actual);

  console.log(isPassing, message);
}

function testAll() {
  testIsPrime(0, false);
  testIsPrime(1, false);
  testIsPrime(4, false);

  testIsPrime(2, true);
  testIsPrime(3, true);
  testIsPrime(7, true);
  testIsPrime(97, true);
  testIsPrime(100, false);
  testIsPrime(997, true);
}

testAll();