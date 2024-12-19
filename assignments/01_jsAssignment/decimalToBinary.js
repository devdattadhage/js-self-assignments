// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 12;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

if (a === 0) {
    console.log(0);
}

let dividend = a;

while (dividend > 0) {
    const remainder = dividend % 2;
    dividend = dividend - remainder;
    dividend = dividend / 2;
    console.log(remainder);
}