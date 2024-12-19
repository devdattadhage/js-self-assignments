const range = function (from, to) {
  const numbers = [];

  for (let i = from; i < to; i++) {
    numbers.push(i);
  }

  return numbers;
}

const filledLine = function (length){
  return "*".repeat(length);
}

// const rectangle