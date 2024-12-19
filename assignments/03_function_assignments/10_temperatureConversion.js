/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function celsiusToKelvin(value) {
  return value + 273.15;
}

function celsiusToFahrenheit(value) {
  return (value * (9 / 5)) + 32;
}

function fahrenheitToKelvin(value) {
  const celsiusValue = fahrenheitToCelsius(value);
  return celsiusToKelvin(celsiusValue);
}

function fahrenheitToCelsius(value) {
  return ((value - 32) * 5) / 9;
}

function kelvinToCelsius(value) {
  return value - 273.15;
}

function kelvinToFahrenheit(value) {
  const celsiusValue = kelvinToCelsius(value);
  return celsiusToFahrenheit(celsiusValue);
}

function doConversion(conversionFormat, value) {
  switch (conversionFormat) {
    case 'C-K': return celsiusToKelvin(value);
    case 'C-F': return celsiusToFahrenheit(value);

    case 'F-K': return fahrenheitToKelvin(value);
    case 'F-C': return fahrenheitToCelsius(value);

    case 'K-C': return kelvinToCelsius(value);
    case 'K-F': return kelvinToFahrenheit(value);
  }

  return NaN;
}

function isConversionUnitValid(from) {
  return from === 'C' || from === 'F' || from === 'K';
}

function isConversionUnitSame(from, to) {
  if (from === to && isConversionUnitValid(from)) {
    return true;
  }

  return false;
}

function convert(from, to, value) {
  if (isConversionUnitSame(from, to)) {
    return +value;
  }

  const conversionFormat = from + '-' + to;

  return doConversion(conversionFormat, +value);
}

function makeMessage(from, to, value, actual) {
  const message = "convert '" + value + "' '" + from + "' to '";

  return message + to + "' and O/P is '" + actual + "'";
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testConvert(from, to, value, expected) {
  const actual = convert(from, to, value);
  const isPassing = expected === actual;

  console.log(getmark(isPassing), makeMessage(from, to, value, actual));
}

function testAll() {
  testConvert('C', 'K', 0, 273.15);
  testConvert('C', 'F', 37, 98.60000000000001);
  testConvert('F', 'C', -40, -40);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert('K', 'C', 100, -173.14999999999998);
  testConvert('K', 'F', 100, -279.66999999999996);
  testConvert('C', 'C', 36, 36);
  testConvert('K', 'K', 100, 100);
  testConvert('F', 'F', -40, -40);
  testConvert('J', 'K', 37, NaN); // NaN is not equal to NaN 
  testConvert('', '', 37, NaN);
  testConvert('J', 'J', 37, NaN);
  testConvert('C', 'K', '0', 273.15);
  testConvert('C', 'F', '37', 98.60000000000001);
  testConvert('F', 'C', '-40', -40);
  testConvert('F', 'K', '98.6', 310.15);
  testConvert('K', 'C', '100', -173.14999999999998);
  testConvert('K', 'F', '100', -279.66999999999996);
  testConvert('S', 'S', '100', NaN);
  testConvert('C', 'C', 'a', NaN);
}

testAll();