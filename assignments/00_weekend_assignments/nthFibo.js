//Write an nthFibo that can find the nth fibo using reduce!

const range = function (from, to, steps) {
  const numbers = [];

  for (let i = from; i <= to; i += steps) {
    numbers.push(i);
  }

  return numbers;
}

const getFiboTerm = function ([current, next]) {
  return [next, current + next];
}

const nthFibo = function (nthTerm) {
  const fibo = range(1, nthTerm - 1, 1).reduce(getFiboTerm, [0, 1]);

  return fibo[0];
}

console.log(nthFibo(1)); //0
console.log(nthFibo(2)); //1
console.log(nthFibo(3)); //1
console.log(nthFibo(4)); //2
console.log(nthFibo(5)); //3