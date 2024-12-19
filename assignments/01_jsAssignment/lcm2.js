// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 13;
const b = 12;
// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let multiplierOfA = 1;

while ((a * multiplierOfA) % b !== 0) {
    multiplierOfA++;
}

const lcm = a * multiplierOfA;

console.log(lcm);

// // second approach
// let lcm = a;

// if (b > a) {
//     lcm = b;
// }

// while (true) {
//     if (lcm % a === 0 && lcm % b === 0) {
//         break;
//     }
//     lcm++;
// }

// console.log(lcm);
