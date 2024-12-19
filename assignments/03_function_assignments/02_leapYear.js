/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisibleBy(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisibleBy(year, 400)) {
    return true;
  }
  if (isDivisibleBy(year, 100)) {
    return false;
  }

  return isDivisibleBy(year, 4);
}

function makeMessage(year, expected, actualResult) {
  const message = " Is Leap year? " + year + " should be " + expected;

  return message + " and is " + actualResult;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testIsLeapYear(year, expected) {
  const actualResult = isLeapYear(year);
  const isPassing = expected === actualResult;

  console.log(getmark(isPassing), makeMessage(year, expected, actualResult));
}

function testAll() {
  testIsLeapYear(4, true);
  testIsLeapYear(100, false);
  testIsLeapYear(400, true);
  testIsLeapYear(0, true);
  testIsLeapYear(2024, true);
  testIsLeapYear(9999, false);
  testIsLeapYear(1600, true);
}

testAll();