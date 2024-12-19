// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 48;
// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let dividend = a;

for (let divisor = 2; divisor <= dividend; ) {
    while (dividend % divisor === 0) {
        dividend = dividend / divisor;
        console.log(divisor);
    }
    if (divisor === 2) {
        divisor = divisor + 1;
        continue;
    } 
    
    divisor = divisor + 2;
}