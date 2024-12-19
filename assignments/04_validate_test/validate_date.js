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

function validateFebMonthDay(year, day) {
  if (isLeapYear(year) && day < 30) {
    return 'valid';
  }
  if (day < 29) {
    return 'valid';
  }

  return 'invalid day';
}

function validate30DayMonthDay(day) {
  if (day > 30) {
    return 'invalid day';
  }
  return 'valid';
}

function validate31DayMonthDay(day) {
  if (day > 31) {
    return 'invalid day';
  }
  return 'valid';
}

function validateDay(day, month, year) {
  if (month === '02') {
    return validateFebMonthDay(year, day);
  }
  if (month === "04" || month === "06" || month === "09" || month === "11") {
    return validate30DayMonthDay(day);
  }

  return validate31DayMonthDay(day);
}

function validateMonth(month, day, year) {
  if (month > 12 || month < 1) {
    return 'invalid month';
  }

  return validateDay(day, month, year);
}

function validateYear(year, month, day) {
  if (year < 1 || year > 9999) {
    return 'invalid year';
  }

  return validateMonth(month, day, year);
}

function validateDDMMYYYY(date) {
  if (date[2] === '-' && date[5] === '-') {
    const year = date[6] + date[7] + date[8] + date[9];
    const month = date[3] + date[4];
    const day = date[0] + date[1];

    return validateYear(year, month, day);
  }

  return 'date not according to format';
}

function validateMMDDYYYY(date) {
  if (date[2] === '-' && date[5] === '-') {
    const year = date[6] + date[7] + date[8] + date[9];
    const month = date[0] + date[1];
    const day = date[3] + date[4];

    return validateYear(year, month, day);
  }

  return 'date not according to format';
}

function validateYYYYMMDD(date) {
  if (date[4] === '-' && date[7] === '-') {
    const year = date[0] + date[1] + date[2] + date[3];
    const month = date[5] + date[6];
    const day = date[8] + date[9];

    return validateYear(year, month, day);
  }

  return 'date not according to format';
}

function validateFormat(format, date) {
  switch (format) {
    case 'dd-mm-yyyy': return validateDDMMYYYY(date);
    case 'mm-dd-yyyy': return validateMMDDYYYY(date);
    case 'yyyy-mm-dd': return validateYYYYMMDD(date);
  }

  return 'invalid format';
}

function validate(format, date) {
  return validateFormat(format, date);
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testInvalidFormat() {
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
}

function testDateNotAccordingToFormat() {
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('dd-mm-yyyy', '01 01 2020', 'date not according to format');
  testValidate('yyyy-mm-dd', '2020 01 01', 'date not according to format');
}

function testInvalidYear() {
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('dd-mm-yyyy', '01-01-0000', 'invalid year');
  testValidate('yyyy-mm-dd', '0000-01-01', 'invalid year');
}

function testInvalidMonth() {
  testValidate('mm-dd-yyyy', '13-01-2024', 'invalid month');
  testValidate('dd-mm-yyyy', '01-13-2024', 'invalid month');
  testValidate('yyyy-mm-dd', '2024-13-01', 'invalid month');
}

function testAll() {
  testInvalidFormat();
  testDateNotAccordingToFormat();
  testInvalidYear();
  testInvalidMonth();

  testValidate('mm-dd-yyyy', '02-30-0400', 'invalid day');
  testValidate('dd-mm-yyyy', '30-02-0400', 'invalid day');
  testValidate('yyyy-mm-dd', '0400-02-30', 'invalid day');
  testValidate('mm-dd-yyyy', '02-29-0400', 'valid');
  testValidate('dd-mm-yyyy', '29-02-0400', 'valid');
  testValidate('yyyy-mm-dd', '0400-02-29', 'valid');

  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
}

testAll();  