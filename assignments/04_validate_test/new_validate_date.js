function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  return !isDivisible(year, 100) && isDivisible(year, 4);
}

function matchAtPosition(string, subString, stringIndex) {
  for (let subStrIndex = 0; subStrIndex < subString.length; subStrIndex++) {
    if (subString[subStrIndex] !== string[stringIndex + subStrIndex]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  if (subString === '') {
    return false;
  }

  for (let index = 0; index < string.length - subString.length; index++) {
    if (matchAtPosition(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function isFormatValid(format) {
  const DMY = 'dd-mm-yyyy';
  const MDY = 'mm-dd-yyyy';
  const YMD = 'yyyy-mm-dd';

  return (format === DMY || format === MDY || format === YMD);
}

function isSpacePresent(date) {
  return isSubstring(date, " ");
}

function isNumerical(year, month, day) {
  const sum = year + month + day;
  return (sum + '') !== 'NaN';
}

function isDateFormatValid(format, date, year, month, day) {
  if (isSpacePresent(date) || !isNumerical(year, month, day)) {
    return false;
  }

  for (let index = 0; index < format.length; index++) {
    if (format[index] === '-' && date[index] !== '-') {
      return false;
    }
  }

  return true;
}

function getYear(format, date) {
  for (let index = 0; index < format.length; index++) {
    if (format[index] === 'y') {
      return +(date[index] + date[index + 1]
        + date[index + 2] + date[index + 3]
      );
    }
  }
}

function getMonth(format, date) {
  for (let index = 0; index < format.length; index++) {
    if (format[index] === 'm') {
      return +(date[index] + date[index + 1]);
    }
  }
}

function getDay(format, date) {
  for (let index = 0; index < format.length; index++) {
    if (format[index] === 'd') {
      return +(date[index] + date[index + 1]);
    }
  }
}

function isYearValid(year) {
  return year > 0 && year < 10000;
}

function isMonthValid(month) {
  return month > 0 && month < 13;
}

function numberOfDaysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }

  return 31;
}

function isDayValid(day, month, year) {
  return day > 0 && day <= numberOfDaysInMonth(month, year);
}

function validate(format, date) {
  if (!isFormatValid(format)) {
    return 'invalid format';
  }

  const year = getYear(format, date);
  const day = getDay(format, date);
  const month = getMonth(format, date);

  if (!isDateFormatValid(format, date, year, month, day)) {
    return 'date not according to format';
  }

  if (!isYearValid(year)) {
    return 'invalid year';
  }

  if (!isMonthValid(month)) {
    return 'invalid month';
  }

  if (!isDayValid(day, month, year)) {
    return 'invalid day'
  }

  return 'valid';
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testInvalidFormat() {
  console.log();

  testValidate('dd-mm-yyyz', '30-05-2024', 'invalid format');
  testValidate('dd mm yyyy', '30-05-2024', 'invalid format');
  testValidate('dd/mm/yyyy', '30-05-2024', 'invalid format');
  testValidate('dd-mm-yyy', '30-05-2024', 'invalid format');
  testValidate('ddmmyyyz', '30-05-2024', 'invalid format');

  testValidate('mm-dd-yyy', '01-31-2024', 'invalid format');
  testValidate('mm-dd-yyyz', '01-31-2024', 'invalid format');
  testValidate('mm dd yyyy', '01-31-2024', 'invalid format');
  testValidate('mm/dd/yyyy', '01-31-2024', 'invalid format');
  testValidate('mmddyyyz', '01-31-2024', 'invalid format');

  testValidate('yyy-mm-dd', '2024-05-30', 'invalid format');
  testValidate('yyyz-mm-dd', '2024-05-30', 'invalid format');
  testValidate('yyyy mm dd', '2024-05-30', 'invalid format');
  testValidate('yyyy/mm/dd', '2024-05-30', 'invalid format');
  testValidate('yyyzmmdd', '2024-05-30', 'invalid format');
}

function testDateNotAccordingToFormat() {
  console.log();

  testValidate('dd-mm-yyyy', '30-05 2024', 'date not according to format');
  testValidate('dd-mm-yyyy', '30 05 2024', 'date not according to format');
  testValidate('dd-mm-yyyy', '30/05/2024', 'date not according to format');
  testValidate('dd-mm-yyyy', '2024-07-27', 'date not according to format');

  testValidate('mm-dd-yyyy', '05-30 2024', 'date not according to format');
  testValidate('mm-dd-yyyy', '03 05 2024', 'date not according to format');
  testValidate('mm-dd-yyyy', '03/05/2024', 'date not according to format');
  testValidate('mm-dd-yyyy', '2024-07-27', 'date not according to format');

  testValidate('yyyy-mm-dd', '2024 05-30', 'date not according to format');
  testValidate('yyyy-mm-dd', '2024 05 30', 'date not according to format');
  testValidate('yyyy-mm-dd', '2024/05/30', 'date not according to format');
  testValidate('yyyy-mm-dd', '03-05-2024', 'date not according to format');

  testValidate('mm-dd-yyyy', '01-01- 204', 'date not according to format');
  testValidate('yyyy-mm-dd', '----------', 'date not according to format');
  testValidate('dd-mm-yyyy', '01-01-fate', 'date not according to format');
}

function testInvalidDay() {
  console.log();

  testValidate('dd-mm-yyyy', '31-04-2024', 'invalid day');
  testValidate('dd-mm-yyyy', '30-02-2024', 'invalid day');
  testValidate('dd-mm-yyyy', '30-02-2024', 'invalid day');
  testValidate('dd-mm-yyyy', '32-01-2024', 'invalid day');

  testValidate('mm-dd-yyyy', '04-31-2024', 'invalid day');
  testValidate('mm-dd-yyyy', '02-30-2024', 'invalid day');
  testValidate('mm-dd-yyyy', '02-30-2024', 'invalid day');
  testValidate('mm-dd-yyyy', '01-32-2024', 'invalid day');

  testValidate('yyyy-mm-dd', '2024-04-31', 'invalid day');
  testValidate('yyyy-mm-dd', '2024-02-30', 'invalid day');
  testValidate('yyyy-mm-dd', '2024-02-30', 'invalid day');
  testValidate('yyyy-mm-dd', '2024-01-32', 'invalid day');
}

function testInvalidMonth() {
  console.log();

  testValidate('dd-mm-yyyy', '30-15-2024', 'invalid month');
  testValidate('dd-mm-yyyy', '11-21-2024', 'invalid month');

  testValidate('mm-dd-yyyy', '15-30-2024', 'invalid month');
  testValidate('mm-dd-yyyy', '21-11-2024', 'invalid month');

  testValidate('yyyy-mm-dd', '2024-15-30', 'invalid month');
  testValidate('yyyy-mm-dd', '2024-21-11', 'invalid month');
}

function testInvalidYear() {
  console.log();

  testValidate('dd-mm-yyyy', '30-05-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '05-30-0000', 'invalid year');
  testValidate('yyyy-mm-dd', '0000-05-30', 'invalid year');
}

function testValidDate() {
  console.log();

  testValidate('dd-mm-yyyy', '29-02-2024', 'valid');
  testValidate('dd-mm-yyyy', '28-02-2024', 'valid');
  testValidate('dd-mm-yyyy', '30-04-2024', 'valid');
  testValidate('dd-mm-yyyy', '28-02-2023', 'valid');
  testValidate('dd-mm-yyyy', '30-01-2024', 'valid');
  testValidate('dd-mm-yyyy', '31-01-2024', 'valid');

  testValidate('mm-dd-yyyy', '02-29-2024', 'valid');
  testValidate('mm-dd-yyyy', '02-28-2024', 'valid');
  testValidate('mm-dd-yyyy', '04-30-2024', 'valid');
  testValidate('mm-dd-yyyy', '02-28-2023', 'valid');
  testValidate('mm-dd-yyyy', '01-31-2024', 'valid');
  testValidate('mm-dd-yyyy', '01-30-2024', 'valid');

  testValidate('yyyy-mm-dd', '2024-02-29', 'valid');
  testValidate('yyyy-mm-dd', '2024-02-28', 'valid');
  testValidate('yyyy-mm-dd', '2024-04-30', 'valid');
  testValidate('yyyy-mm-dd', '2023-02-28', 'valid');
  testValidate('yyyy-mm-dd', '2024-01-30', 'valid');
  testValidate('yyyy-mm-dd', '2024-01-31', 'valid');
}

function testAll() {
  console.log("\n***  Test result for validate_date program.  ***\n");
  testInvalidFormat();
  testDateNotAccordingToFormat();
  testInvalidDay();
  testInvalidMonth();
  testInvalidYear();
  testValidDate();
}

testAll();