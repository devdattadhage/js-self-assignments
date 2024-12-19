/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isPrime(primeCandidate) {
  for (let divisor = 2; divisor <= primeCandidate ** 0.5; divisor++) {
    if (primeCandidate % divisor === 0) {
      return false;
    }
  }

  return true;
}

function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }

  let primeCandidate = number + 1;

  while (!isPrime(primeCandidate)) {
    primeCandidate++;
  }

  return primeCandidate;
}

function makeMessage(number, expected, actual) {
  const message = " FirstPrimeAbove? " + number + " should be " + expected;

  return message + " and is " + actual;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
  const isPassing = expected === actual;

  console.log(getmark(isPassing), makeMessage(number, expected, actual));
}

function testAll() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(-5, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(5, 7);
}

testAll();