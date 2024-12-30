// distance that calculates the difference between the first and last occurences of a letter in a string. => ("ellen", "e") => 3
const distance = (text, target) =>
  text.lastIndexOf(target) - text.indexOf(target);

// underline that underlines a string with '-' characters => "dev" => "dev\n---"
const underline = (text) => text.concat("\n", "-".repeat(text.length));

// separate puts new lines after all full stops => "a.b.c" => "a.\nb.\nc"
const separate = (text) => text.replaceAll(".", ".\n");

// concatenate the first 2 and last 2 letters of a string. => "hello" => lohe
const combine = (text) => text.slice(-2).concat(text.slice(0, 2));

// filter all stings that have 'at' as the last two chars => ["chat", "bat", 'cut'] => ["chat", "bat"]
const filterEndsWith = (array, endChars) =>
  array.filter((e) => e.endsWith(endChars));

// rotate that rotates an array to the right by 1 position => [1,2,3] => [3,2,1]
const rotate = ([...array]) => {
  array.unshift(array.pop());
  return array;
};

// splitEvenOdd that splits an array into two arrays: one with even numbers and the other with odd numbers. => [1,2,3,4,5] => [[2,4], [1,3,5]]
// try this with groupBy
const splitEvenOdd = (array) =>
  Object.values(Object.groupBy(array, (n) => n % 2));

// repeatFirst that duplicates the first element of an array at the beginning => [10,20,30] => [10,10,20,30]
const repeatFirst = (array) => [array[0], ...array];

// removeMiddle that removes the middle elements of an array. If the array length is even, remove the two middle elements. => [1,2,3,4,5] => [1,2,4,5]     => [1,2,3,4] => [1,4]
const removeMiddle = ([...array]) => {
  const middle = Math.round(array.length / 2) - 1;

  const deletionCount = array.length % 2 === 0 ? 2 : 1;
  array.splice(middle, deletionCount);

  return array;
};

// uniqueConcat that combines two arrays and removes any duplicate values =>  [1,2,3],[3,4,5] => [1,2,3,4,5]
const isUnique = (unique, element) => {
  if (unique.includes(element)) {
    return unique;
  }

  return [...unique, element];
};

const uniqueConcat = (array1, array2) => {
  const combinedArray = array1.concat(array2);

  return combinedArray.reduce(isUnique, []);
};
