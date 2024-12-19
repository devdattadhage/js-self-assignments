const filter = function (predicate, array) {
  const result = [];

  for (const element of array) {
    if (predicate(element)) {
      result.push(element);
    }
  }

  return result;
}

const isOdd = function (number) {
  return number & 1 === 1;
}

console.log(filter(isOdd, [1, 2, 3, 4, 5]));