//Write a function that gives you the second highest number using reduce

const twoHighest = function ([first, second], element) {
  if (first < element) {
    return [element, first];
  }
  if (second < element) {
    return [first, element];
  }

  return [first, second];
}

const getSecondHighest = function (array) {
  const highest = array.reduce(twoHighest, [-Infinity, -Infinity]);

  return highest[1];
}

console.log(getSecondHighest([1, 2, 3, 4, 5]));
console.log(getSecondHighest([1, 2]));
console.log(getSecondHighest([1]));
console.log(getSecondHighest([]));
console.log(getSecondHighest([0, 50, 10]));
console.log(getSecondHighest([20, 999, 46, 78, 99]));