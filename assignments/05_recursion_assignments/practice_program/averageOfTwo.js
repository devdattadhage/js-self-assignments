function max(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function min(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function __averageOfTwo(min, max) {
  if (min === max) {
    return min;
  }

  return __averageOfTwo(min + 0.5, max - 0.5);
}

function averageOfTwo(number1, number2) {
  const minNum = min(number1, number2);
  const maxNum = max(number1, number2);

  return __averageOfTwo(minNum, maxNum); 
}

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function makeMessage(number1, number2, expected, actual) {
  const message = "Average of " + number1 + " And : " + number2;
  const resultSegment = " | Expected : " + expected + " | Actual : " + actual;

  return message + resultSegment;
}

function testAverageOfTwo(number1, number2, expected) {
  const actual = averageOfTwo(number1, number2);
  const isPassing = getMark(actual, expected);

  console.log(isPassing, makeMessage(number1, number2, expected, actual));
}

function testAll() {
  testAverageOfTwo(10, 20, 15);
  testAverageOfTwo(2, 3, 2.5);
  testAverageOfTwo(22, 9, 15.5);
  testAverageOfTwo(11, 11, 11);
  testAverageOfTwo(10, 0, 5);
  testAverageOfTwo(0, 10, 5);
  testAverageOfTwo(0, 0, 0);
}

testAll();