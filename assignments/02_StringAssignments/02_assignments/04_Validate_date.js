const format = 'yyyy-mm-dd';
const date = '2024-02-29';
// const format = 'mm-dd-yyyy'; const date = '02-28-2022';
// const format = 'dd-mm-yyyy'; const format = '31-08-2012';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let result = "invalid";

if (date.length === 10) {
  let year = "";
  let month = "";
  let day = "";

  if (format === 'yyyy-mm-dd') {
    if (date[4] === "-" && date[7] === "-") {
      year = date[0] + date[1] + date[2] + date[3];
      month = date[5] + date[6];
      day = date[8] + date[9];
    }
  }
  if (date[2] === "-" && date[5] === "-") {
    year = date[6] + date[7] + date[8] + date[9];
    if (format === 'mm-dd-yyyy') {
      month = date[0] + date[1];
      day = date[3] + date[4];
    }
    if (format === 'dd-mm-yyyy') {
      day = date[0] + date[1];
      month = date[3] + date[4];
    }
  }

  const divideBy4 = (year % 4 === 0);
  const divideBy100 = (year % 100 === 0);
  const divideBy400 = (year % 400 === 0);
  const isLeapleap = (divideBy400 || !divideBy100 && divideBy4);

  let maxDays = 32;

  if (month === "04" || month === "06" || month === "09" || month === "11") {
    maxDays = 31;
  }

  if (month === "02") {
    maxDays = 29;
    if (isLeapleap) {
      maxDays = 30;
    }
  }

  const isValidDate = year > 0 && month > 0 && month < 13 && day > 0 && day < maxDays;
  result = isValidDate ? "valid" : "invalid";
}

console.log(result);