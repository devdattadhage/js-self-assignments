const isStringAbove5 = function (string) {
  return string.length > 5;
}

const isOdd = function (number) {
  return number & 1 === 1;
}

const half = function (number) {
  return number / 2;
} 

const convertToUpperCase = function (string) {
  return string.toUpperCase();
}

const longestString = function (string1, string2) {
  return string1.length > string2.length ? string1 : string2;
}

const concatString = function (string1, string2) {
  return string1.concat(string2);
}

const product = function (num1, num2) {
  return num1 == '' ? num2 : num1 * num2;
}

const countOdd = function (count, num) {
  return isOdd(num) ? +count + 1 : +count;
}

const performOperation = function (array, operation) {
  const result = [];

  for (const element of array) {
    result.push(operation(element));
  }

  return result;
}

const selectElements = function (array, condition) {
  const result = [];

  for (const element of array) {
    if (condition(element)) {
      result.push(element);
    }
  }

  return result;
}

const getElement = function (array, condition) {
  let result = '';

  for (const element of array) {
    result = condition(result, element);
  }

  return result;
} 

const calculateSqrts = function (array) {
  return performOperation(array, Math.sqrt);
}

const selectOdds = function (array) {
  return selectElements(array, isOdd);
}

const calculateHalfValues = function (array) {
  return performOperation(array, half);
}

const selectStringsGreaterThan5 = function (array) {
  return selectElements(array, isStringAbove5);
}

const toUpper = function (array) {
  return performOperation(array, convertToUpperCase);
}

const findLongestString = function (array) {
  return getElement(array, longestString);
}

const combineAll = function (array) {
  return getElement(array, concatString);
}

const productOfAll = function (array) {
  return getElement(array, product);
}

const getOddCount = function (array) {
  return getElement(array, countOdd);
}

/* *********************** testing Segment ************************ */

console.log(calculateSqrts([1, 4, 9, 16]));
console.log(selectOdds([1, 2, 3, 4]));
console.log(calculateHalfValues([10, 20, 31]));
console.log(selectStringsGreaterThan5(["impossible", "possible", "no"]));
console.log(toUpper(["impossible", "possible", "no"]));
console.log(findLongestString(["this", "amazing", "assignment", "rocks"]));
console.log(findLongestString(["impossible", "possible", "no"]));
console.log(combineAll(["ab", "so", "lu", "te"]));
console.log(productOfAll([1, 2, 3, 4]));
console.log(productOfAll([0]));
console.log(getOddCount([1, 2, 3, 4, 5]));
