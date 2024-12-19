const below20 = ["zero", "one", "two", "three", "four", "five", "six",
  "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
  "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const below100 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty",
  "seventy", "eighty", "ninety"];

const higherUnits = [
  [1000000000, "billion", null],
  [1000000, "million", null],
  [1000, "thousand", null],
  [100, "hundred", null],
  [10, "", below100] // Special case for numbers below 100
];

function findHighestUnitBelow(num) {
  for (const [unit, unitName, lookupTable] of higherUnits) {
    if (num >= unit) {
      return [unit, unitName, lookupTable];
    }
  }
  return [1, "", null];
}

function splitAndConvert(num, threshold, unitName, lookupTable) {
  const majorComponent = Math.floor(num / threshold);
  const remainder = num % threshold;

  const leftWords = lookupTable ? lookupTable[majorComponent] : numberToWords(majorComponent);

  if (remainder === 0) {
    return [leftWords, unitName].join(" ").trim();
  }

  const rightWords = numberToWords(remainder);

  return [leftWords, unitName, rightWords].join(" ");
}

function numberToWords(num) {
  if (num < 20) {
    return below20[num];
  }

  const [threshold, unitName, lookupTable] = findHighestUnitBelow(num);
  return splitAndConvert(num, threshold, unitName, lookupTable);
}

/********************* Test Framework *********************/

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function composeStatement() {
  return "Number To Words := ";
}

function createResultMessage(expected, actual) {
  return "\n  Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(number) {
  const inputSegment = "Number : " + number;

  return composeStatement() + inputSegment;
}

function testNumberToWords(number, expected) {
  const actual = numberToWords(number);
  const mark = getMark(actual, expected);
  const message = createMessage(number);
  const result = createResultMessage(expected, actual);

  console.log(mark, message, result);
}

function testSingleDigitNumber() {
  testNumberToWords(0, 'zero');
  testNumberToWords(1, 'one');
  testNumberToWords(2, 'two');
  testNumberToWords(3, 'three');
  testNumberToWords(4, 'four');
  testNumberToWords(5, 'five');
  testNumberToWords(6, 'six');
  testNumberToWords(7, 'seven');
  testNumberToWords(8, 'eight');
  testNumberToWords(9, 'nine');
}

function test11To19Numbers() {
  testNumberToWords(11, 'eleven');
  testNumberToWords(12, 'twelve');
  testNumberToWords(13, 'thirteen');
  testNumberToWords(14, 'fourteen');
  testNumberToWords(15, 'fifteen');
  testNumberToWords(16, 'sixteen');
  testNumberToWords(17, 'seventeen');
  testNumberToWords(18, 'eighteen');
  testNumberToWords(19, 'nineteen');
}

function testTensNumbers() {
  testNumberToWords(10, 'ten');
  testNumberToWords(20, 'twenty');
  testNumberToWords(30, 'thirty');
  testNumberToWords(40, 'forty');
  testNumberToWords(50, 'fifty');
  testNumberToWords(60, 'sixty');
  testNumberToWords(70, 'seventy');
  testNumberToWords(80, 'eighty');
  testNumberToWords(90, 'ninety');
}

function testTensMiddleNumbers() {
  testNumberToWords(21, 'twenty one');
  testNumberToWords(32, 'thirty two');
  testNumberToWords(43, 'forty three');
  testNumberToWords(54, 'fifty four');
  testNumberToWords(65, 'sixty five');
  testNumberToWords(76, 'seventy six');
  testNumberToWords(87, 'eighty seven');
  testNumberToWords(98, 'ninety eight');
  testNumberToWords(99, 'ninety nine');
}

function testDoubleDigitNumber() {
  test11To19Numbers();
  testTensNumbers();
  testTensMiddleNumbers();
}

function testHundreds() {
  testNumberToWords(100, 'one hundred');
  testNumberToWords(200, 'two hundred');
  testNumberToWords(300, 'three hundred');
  testNumberToWords(400, 'four hundred');
  testNumberToWords(500, 'five hundred');
  testNumberToWords(600, 'six hundred');
  testNumberToWords(700, 'seven hundred');
  testNumberToWords(800, 'eight hundred');
  testNumberToWords(900, 'nine hundred');
}

function testBoundaryNumbersOfHundreds() {
  testNumberToWords(101, 'one hundred one');
  testNumberToWords(199, 'one hundred ninety nine');
  testNumberToWords(301, 'three hundred one');
  testNumberToWords(399, 'three hundred ninety nine');
  testNumberToWords(601, 'six hundred one');
  testNumberToWords(699, 'six hundred ninety nine');
  testNumberToWords(901, 'nine hundred one');
  testNumberToWords(999, 'nine hundred ninety nine');
}

function testMiddleNumbersOfHundreds() {
  testNumberToWords(111, 'one hundred eleven');
  testNumberToWords(222, 'two hundred twenty two');
  testNumberToWords(333, 'three hundred thirty three');
  testNumberToWords(444, 'four hundred forty four');
  testNumberToWords(555, 'five hundred fifty five');
  testNumberToWords(666, 'six hundred sixty six');
  testNumberToWords(777, 'seven hundred seventy seven');
  testNumberToWords(888, 'eight hundred eighty eight');
  testNumberToWords(919, 'nine hundred nineteen');
}

function testThreeDigitNumber() {
  testHundreds();
  testBoundaryNumbersOfHundreds();
  testMiddleNumbersOfHundreds();
}

function testThousands() {
  testNumberToWords(1000, 'one thousand');
  testNumberToWords(10000, 'ten thousand');
  testNumberToWords(11000, 'eleven thousand');
  testNumberToWords(100000, 'one hundred thousand');
  testNumberToWords(900000, 'nine hundred thousand');
}

function testBoundaryNumbersOfThousands() {
  testNumberToWords(1001, 'one thousand one');
  testNumberToWords(10001, 'ten thousand one');
  testNumberToWords(100001, 'one hundred thousand one');
  testNumberToWords(9999, 'nine thousand nine hundred ninety nine');
  testNumberToWords(99999, 'ninety nine thousand nine hundred ninety nine');
  testNumberToWords(999999,
    'nine hundred ninety nine thousand nine hundred ninety nine');
}

function testMiddleNumbersOfThousands() {
  testNumberToWords(1345, 'one thousand three hundred forty five');
  testNumberToWords(19789, 'nineteen thousand seven hundred eighty nine');
  testNumberToWords(123417,
    'one hundred twenty three thousand four hundred seventeen');
  testNumberToWords(582240,
    'five hundred eighty two thousand two hundred forty');
  testNumberToWords(715310,
    'seven hundred fifteen thousand three hundred ten');
}

function testThousandsNumber() {
  testThousands();
  testBoundaryNumbersOfThousands();
  testMiddleNumbersOfThousands();
}

function testMillions() {
  testNumberToWords(1000000, 'one million');
  testNumberToWords(10000000, 'ten million');
  testNumberToWords(100000000, 'one hundred million');
  testNumberToWords(900000000, 'nine hundred million');
}

function testBoundaryNumbersOfMillions() {
  testNumberToWords(1000001, 'one million one');
  testNumberToWords(10000001, 'ten million one');
  testNumberToWords(100000001, 'one hundred million one');
  testNumberToWords(9999999,
    'nine million nine hundred ninety nine thousand nine hundred ninety nine');
  testNumberToWords(99999999,
    'ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
  testNumberToWords(999999999,
    'nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
}

function testMiddleNumbersOfMillions() {
  testNumberToWords(1001345,
    'one million one thousand three hundred forty five');
  testNumberToWords(19019789,
    'nineteen million nineteen thousand seven hundred eighty nine');
  testNumberToWords(219123417,
    'two hundred nineteen million one hundred twenty three thousand four hundred seventeen');
  testNumberToWords(654582240,
    'six hundred fifty four million five hundred eighty two thousand two hundred forty');
  testNumberToWords(832715310,
    'eight hundred thirty two million seven hundred fifteen thousand three hundred ten');
}

function testMillionNumber() {
  testMillions();
  testBoundaryNumbersOfMillions();
  testMiddleNumbersOfMillions();
}

function testBillions() {
  testNumberToWords(1000000000, 'one billion');
  testNumberToWords(10000000000, 'ten billion');
  testNumberToWords(100000000000, 'one hundred billion');
  testNumberToWords(900000000000, 'nine hundred billion');
}

function testBoundaryNumbersOfBillions() {
  testNumberToWords(1000000001, 'one billion one');
  testNumberToWords(10000000001, 'ten billion one');
  testNumberToWords(100000000001, 'one hundred billion one');
  testNumberToWords(9999999999,
    'nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
  testNumberToWords(99999999999,
    'ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
  testNumberToWords(999999999999,
    'nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
}

function testMiddleNumbersOfBillions() {
  testNumberToWords(1001001345,
    'one billion one million one thousand three hundred forty five');
  testNumberToWords(19019019789,
    'nineteen billion nineteen million nineteen thousand seven hundred eighty nine');
  testNumberToWords(234654582240,
    'two hundred thirty four billion six hundred fifty four million five hundred eighty two thousand two hundred forty');
  testNumberToWords(976832715310,
    'nine hundred seventy six billion eight hundred thirty two million seven hundred fifteen thousand three hundred ten');
}

function testBillionNumber() {
  testBillions();
  testBoundaryNumbersOfBillions();
  testMiddleNumbersOfBillions();
}

function testAll() {
  testSingleDigitNumber();
  testDoubleDigitNumber();
  testThreeDigitNumber();
  testThousandsNumber();
  testMillionNumber();
  testBillionNumber();
}

testAll();
