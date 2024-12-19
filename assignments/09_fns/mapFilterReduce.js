// ["abc","def","ghi"] => "cfi"
// You are given an array of strings. Write a function to return a single string that is the concatenation of the last character of every string in the array.
const getLastChar = function (string) {
  return string.slice(-1);
}

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.map(getLastChar).join('');
}

// [[1,-2],[3,4],[5,-6]] => [[3,4]]
// Write a function to return a new array containing only those lists that contain at least one positive number.
const isPositive = function (num) {
  return num > 0;
}

const somePositive = function (element) {
  return element.some(isPositive);
}

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(somePositive);
}

// [0,-1,-2,3,4] => 12
// Write a function to calculate the product of all the positive numbers in the array. 0 is not positive.
const product = function (num1, num2) {
  return num1 * num2;
}

const productOfPositives = function (numbers) {
  return numbers.filter(isPositive).reduce(product, 1);
}

// ["educate", "there", "animation"] => "educate"
// Write a function to return the longest string that contains the letter "e".  
const includesE = function (element) {
  return element.includes('e');
}

const longerString = function (initial, element) {
  return initial.length > element.length ? initial : element;
}

const longestEWord = function (strings) {
  return strings.filter(includesE).reduce(longerString, '');
}

// [[2, 4, 6], [1, 3, 5], [8, 10]] => false
// [[2,4],[6,8]] => true
// Write a function to check if all lists contain only even numbers. Return `true` if they do, and `false` otherwise.
const isEven = function (num) {
  return num % 2 === 0;
}

const areAllEven = function (element) {
  return element.every(isEven);
}

const areAllListsEven = function (listOfLists) {
  return listOfLists.every(areAllEven);
}

// [1,2,3,4] => 10 (sqr(1) + sqr(3))
// Write a function to calculate the sum of the squares of all the odd numbers in the array
const square = function (num) {
  return num * num;
}

const isOdd = function (num) {
  return (num & 1) === 1;
}

const add = function (num1, num2) {
  return num1 + num2;
}

const sumOfSquaresOfOdds = function (numbers) {
  return numbers.filter(isOdd).map(square).reduce(add, 0);
}

// ["abc","def"] => true
// ["abc","de"] => false
// Write a function to check if all strings have the same length. Return `true` if they do, and `false` otherwise. 
const areAllOfSameLength = function (listOfStrings) {
  const sameLength = function (element) {
    return element.length === listOfStrings[0].length;
  }

  return listOfStrings.every(sameLength);
}

// [1,2,3,4,1,2] => [1,2,3,4]
// Write a function to return a new array with all duplicate values removed.  
const addIfNotPresent = function (elements, element) {
  if (elements.includes(element)) {
    return elements;
  }

  elements.push(element);
  return elements;
}

const removeDuplicates = function (numbers) {
  return numbers.reduce(addIfNotPresent, []);
}

// ["ant", "eye", "id"] => true
// ["ant","bat"] => false
// Write a function to check if all the strings in the array start with a vowel. Return `true` if they do, and `false` otherwise.  
const isStartWithVowel = function (element) {
  const vowel = 'aeiou';

  return vowel.includes(element[0]);
}

const allStartWithAVowel = function (words) {
  return words.every(isStartWithVowel);
}

// [1,2,3,4] => [1,3,6,10]
// [1,1,4,5] => [1,2,6,11]
// Build an array where each element is the running sum of the elements up to that index.
const getRunningTotal = function (initial, element) {
  initial.push(initial.at(-1) + element);

  return initial;
}

const runningTotal = function (numbers) {
  const result = numbers.reduce(getRunningTotal, [0]);
  result.shift();

  return result;
}

// [] => [[]]
// [1] => [[1]]
// [1,2] => [[1,2]]
// [1,2,3] => [[1,2],[3]]
// [1,2,3,4] => [[1,2],[3,4]]
// Write a function to pair up elements of a list. 

const makePairs = function (pairs, element) {
  if (pairs.at(-1).length === 2) {
    pairs.push([]);
  }

  pairs.at(-1).push(element);
  return pairs;
}

const pairs = function (list) {
  return list.reduce(makePairs, [[]]);
}

/* *********************** Testing Section ******************************** */

// console.log(allLastChars(["abc", "def", "ghi"]))//=> "cfi"

// console.log(listsWithPositiveNumbers([[1, -2], [3, 4], [5, -6]]))//=> [[1, -2], [3, 4],[5, -6]]
// console.log(listsWithPositiveNumbers([[-1, -2], [3, 4], [-5, -6]]))//=> [[3,4]]

// console.log(productOfPositives([0, -1, -2, 3, 4]))// => 12

// console.log(longestEWord(["educate", "there", "animation"]))// => "educate"
// console.log(longestEWord(["Akash", "this", "animation"]))// => ""

// console.log(areAllListsEven([[2, 4, 6], [1, 3, 5], [8, 10]]))// => false
// console.log(areAllListsEven([[2, 4], [6, 8]]))// => true

// console.log(sumOfSquaresOfOdds([1, 2, 3, 4]))// => 10
// console.log(sumOfSquaresOfOdds([1, 2, 3, 4, 5]))// => 35

// console.log(areAllOfSameLength(["abc", "def"]))// => true
// console.log(areAllOfSameLength(["abc", "de"]))// => false

// console.log(removeDuplicates([1, 2, 3, 4, 1, 2]))// => [1, 2, 3, 4]
// console.log(removeDuplicates([1, 1, 3, 4, 1, 2]))// => [1, 3, 4, 2]

// console.log(allStartWithAVowel(["ant", "eye", "id"]))// => true
// console.log(allStartWithAVowel(["ant", "bye", "id"]))// => false

// console.log(runningTotal([1, 2, 3, 4]))// => [1,3,6,10]
// console.log(runningTotal([1, 1, 4, 5]))// => [1,2,6,11]

// console.log(pairs([]))// => [[]]
// console.log(pairs([1]))// => [[1]]
// console.log(pairs([1, 2]))// => [[1,2]]
// console.log(pairs([1, 2, 3]))// => [[1,2],[3]]
// console.log(pairs([1, 2, 3, 4]))// => [[1,2],[3,4]]