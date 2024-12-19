//Write a function that takes an array and reverses it without using .reverse. Use reduce

const reverseArray = function (array) {
  const doUnshift = function (initial, element) {
    initial.unshift(element);
    return initial;
  }

  return array.reduce(doUnshift, []);
}

console.log(reverseArray([1, 2, 3, 4, 5]));