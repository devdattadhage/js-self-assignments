const map = function (mapper, array) {
  const result = [];

  for (const element of array) {
    result.push(mapper(element));
  }

  return result;
}

console.log(map(Math.sqrt, [1, 4, 9, 16, 25]));