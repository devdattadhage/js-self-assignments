const primeFactorsCandidate = 600851475143;

let dividend = primeFactorsCandidate;
let divisor = 2;

while (divisor <= dividend) {
    while (dividend % divisor === 0) {
        dividend = dividend / divisor;
    }
    if (divisor === 2) {
        divisor = divisor + 1;
        continue;
    }
    divisor = divisor + 2;
}

const largestPrimeFactor = divisor - 2;

console.log(largestPrimeFactor);