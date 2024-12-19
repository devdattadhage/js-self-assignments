// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 12;
const b = 38;
// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let lcm = 0;
let hcf = 0;

for (let divisor = 1; divisor <= a && divisor <= b; divisor++) {
    if (a % divisor === 0 && b % divisor === 0) {
        hcf = divisor;
    }
}

if ((a * b) !== 0) {
    lcm = (a * b) / hcf;
}

console.log(lcm);