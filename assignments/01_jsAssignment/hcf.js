// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 1;
const b = 18;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let hcf = a;

if (b > a) {
  hcf = b;
}

// let hcf = a > b ? a : b; 

for (let divisor = 1; (divisor <= a) && (divisor <= b); divisor++) {
  if (a % divisor === 0 && b % divisor === 0) {
    hcf = divisor;
  }
}

console.log(hcf);