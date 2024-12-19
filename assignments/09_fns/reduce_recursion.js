const reduce = function (reducer, initial, array, index) {
  if (array.length - 1 === index) {
    return initial;
  }
  
  return reduce(reducer, reducer(initial, array[index + 1]), array, index += 1);
}

const add = function (num1, num2) {
  return num1 + num2;
}


const array = [4, 2];
console.log(reduce(add, array[0], array, 0))