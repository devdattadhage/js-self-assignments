// Do not rename a, d or n, use them as input for your program.
// While testing we will change their values.
const a = 2;
const d = 3;
const n = 5;
// Print the sum of first n terms of an AP where a is the first term and d is the common difference.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let apSum = 0;

for (let terms = 1; terms <= n; terms++) {
    apSum = apSum + (a + ((terms - 1) * d));
}

console.log(apSum);

// tried with formula
// const apSum = ((n / 2) * ((2 * a) + ((n - 1) * d)));

// console.log(apSum);

/*
Formula Sn = n/2 [2a + (n-1)d]
a  d  n sum
2  3  5  40
0  3  5  30
2  0  5  10
2  3  0   0
0  0  0   0
 */