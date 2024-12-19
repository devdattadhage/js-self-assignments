/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisibleBy(dividend, divisor) {
  return dividend % divisor === 0;
}

function fizzBuzz(number) {
  if (isDivisibleBy(number, 15)) {
    return "fizzbuzz";
  }
  if (isDivisibleBy(number, 3)) {
    return "fizz";
  }
  if (isDivisibleBy(number, 5)) {
    return "buzz";
  }
  return "" + number;
}

function makeMessage(number, expected, actualResult) {
  const message = " FizzBuzz? " + number + " should be " + expected;

  return message + " and is " + actualResult;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testFizzBuzz(number, expected) {
  const actualResult = fizzBuzz(number);
  const isPassing = expected === actualResult;

  console.log(getmark(isPassing), makeMessage(number, expected, actualResult));
}

function testAll() {
  testFizzBuzz(3, "fizz");
  testFizzBuzz(5, "buzz");
  testFizzBuzz(15, "fizzbuzz");
  testFizzBuzz(0, "fizzbuzz");
  testFizzBuzz(7, "7");
}

testAll();