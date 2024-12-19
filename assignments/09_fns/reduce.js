const reduce = function (reducer, initial, array) {
  let final = initial;

  for (const element of array) {
    final = reducer(final, element);
  }

  return final;
}

const product = function (num1, num2) {
  return num1 * num2;
}

const devMax = function (...elements) {
  let result = -Infinity;

  for (const element of elements) {
    result = element > result ? element : result;
  }

  return result;
}

console.log(reduce(product, 1, [2, 2, 2, 2, 2]));
console.log(reduce(devMax, -Infinity, [1, 4, 99, 16, 25]));