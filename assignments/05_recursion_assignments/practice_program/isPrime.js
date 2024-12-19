function isPrime(number, divisor = 2) {
  if (number < 2 || number % divisor === 0) {
    return number === 2;
  }
  if (divisor > number / 2) {
    return true;
  }

  return isPrime(number, divisor + 1);
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(47));
console.log(isPrime(50));
console.log(isPrime(97));