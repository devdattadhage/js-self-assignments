function isValidFormat(format) {
  switch (format) {
    case "yyyy-mm-dd":
    case "mm-dd-yyyy":
    case "dd-mm-yyyy":
      return true;
    default:
      return false;
  }
}

function getYear(format, date) {
  if (format === "yyyy-mm-dd") {
    return +(date[0] + date[1] + date[2] + date[3]);
  }
  return +(date[6] + date[7] + date[8] + date[9]);
}

function getMonth(format, date) {
  switch (format) {
    case "yyyy-mm-dd":
      return +(date[5] + date[6]);
    case "mm-dd-yyyy":
      return +(date[0] + date[1]);
    case "dd-mm-yyyy":
      return +(date[3] + date[4]);
  }
}

function getDay(format, date) {
  switch (format) {
    case "yyyy-mm-dd":
      return +(date[8] + date[9]);
    case "mm-dd-yyyy":
      return +(date[3] + date[4]);
    case "dd-mm-yyyy":
      return +(date[0] + date[1]);
  }
}

function isNumerical(date) {
  let hyphenCount = 0;
  for (let index = 0; index < date.length; index++) {
    if (date[index] === " ") {
      return false;
    }
    if (date[index] === "-") {
      hyphenCount += 1;
    }
  }
  return hyphenCount === 2;
}

function isValidDate(format, date) {
  switch (format) {
    case "yyyy-mm-dd":
      return date[4] === "-" || date[7] === "-";
  }
  return date[2] === "-" || date[5] === "-";
}

function isYearValid(year) {
  return year > 0 && year < 10000;
}

function isMonthValid(month) {
  return month > 0 && month < 13;
}

function isDivibleBy(year, divisor) {
  return year % divisor === 0;
}

function isLeap(year) {
  if (isDivibleBy(400, year)) {
    return true;
  }
  return !isDivibleBy(100) && isDivibleBy(4);
}

function isValidDayOfFeb(year, day) {
  if (isLeap(year)) {
    return day < 30;
  }
  return day < 29;
}

function isDayValid(day, year, month) {
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return day < 31;
  }
  if (month !== 2) {
    return day < 32;
  }
  return isValidDayOfFeb(year, day);
}

function dateConfirmation(format, date) {
  const year = getYear(format, date);
  const month = getMonth(format, date);
  const period = getDay(format, date);
  if (!isYearValid(year)) {
    return "invalid year";
  }
  if (!isMonthValid(month)) {
    return "invalid month";
  }
  if (!isDayValid(period, year, month)) {
    return "invalid day";
  }
  return "valid";
}

function validate(format, date) {

  if (!isValidFormat(format)) {
    return 'invalid format';
  }

  if (!isValidDate(format, date) || !isNumerical(date)) {
    return 'date not according to format';
  }

  return dateConfirmation(format, date);
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
