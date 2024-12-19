const earlyTrue = function (predicate, array) {
  for (const element of array) {
    if (predicate(element)) {
      return true;
    }
  }

  return false;
}

const earlyFalse = function (predicate, array) {
  for (const element of array) {
    if (predicate(element)) {
      return false;
    }
  }

  return true;
}

const isOdd = function (number) {
  return number & 1 === 1;
}

const isNegative = function (number) {
  return number < 0;
}

const isAbove100 = function (number) {
  return number > 100;
}

const isStringBelow4 = function (string) {
  return string.length < 4;
}

const atleastOneOdd = function (array) {
  return earlyTrue(isOdd, array);
}

const areAllPositive = function (array) {
  return earlyFalse(isPositive, array);
}

const atLeastOneAbove100 = function (array) {
  return earlyTrue(isAbove100, array);
}

const areAllStringsAbove3 = function (array) {
  return earlyFalse(isStringBelow4, array);
}

console.log(atleastOneOdd([1, 2, 3, 4])); //true
console.log(atleastOneOdd([2, 4])); //false

console.log(areAllPositive([2, 4])); //true
console.log(areAllPositive([2, -4])); //false

console.log(atLeastOneAbove100([2, 400])); //true
console.log(atLeastOneAbove100([2, 4])); //false

console.log(areAllStringsAbove3(["this", "that"])); //true
console.log(areAllStringsAbove3(["or", "not"])); //false