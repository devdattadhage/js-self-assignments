// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 0;
// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let remainingDigits = a;
let lastDigitsPowerSum = 0;
let power = 1;

while (10 ** power < a) {
  power++;
}

while (remainingDigits > 0) {
  const lastDigit = remainingDigits % 10;
  const lastDigitPower = lastDigit ** power;
  lastDigitsPowerSum = lastDigitsPowerSum + lastDigitPower;
  remainingDigits = (remainingDigits - lastDigit) / 10;
}

const isArmstrong = (a == lastDigitsPowerSum);

console.log(isArmstrong);