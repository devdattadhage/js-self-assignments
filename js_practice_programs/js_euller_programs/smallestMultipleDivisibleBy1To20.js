// let multipleCandidate = 2500;
// let divisor = 11;

// while (divisor <= 20) {
//     if(multipleCandidate % divisor == 0) {
//         divisor = divisor + 1;
//         continue;
//     }

//     multipleCandidate = multipleCandidate + 1;
//     divisor = 11;
// }

// console.log(multipleCandidate);


// solve by finding lcm of all numbers
let lcmCandidate = 11;
let secondNumber = 12;

while (secondNumber <= 20) {
    let multiplierOfLcmCandidate = 1;

    while ((lcmCandidate * multiplierOfLcmCandidate) % secondNumber !== 0) {
        multiplierOfLcmCandidate++;
    }

    lcmCandidate = lcmCandidate * multiplierOfLcmCandidate;
    secondNumber++;
}

console.log(lcmCandidate);