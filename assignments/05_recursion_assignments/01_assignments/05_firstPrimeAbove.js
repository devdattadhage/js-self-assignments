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

function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }

  const primeCandidate = number + 1;

  if (isPrime(primeCandidate)) {
    return primeCandidate;
  }

  return firstPrimeAbove(number + 1);
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function makeMessage(number, expected, actual) {
  const message = "First Prime Above of " + number;
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
  const isPassing = getMark(actual, expected);
  const message = makeMessage(number, expected, actual);

  console.log(isPassing, message);
}

function testAll() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(7, 11);
  testFirstPrimeAbove(13, 17);
  testFirstPrimeAbove(95, 97);
  testFirstPrimeAbove(993, 997);
}

testAll();