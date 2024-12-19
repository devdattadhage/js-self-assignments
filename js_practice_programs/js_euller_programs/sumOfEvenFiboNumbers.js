const sumOfEvenFiboNumsUpto = 4000000;
let secondPreviousterm = 1;
let previousTerm = 1;
let currentTerm = secondPreviousterm + previousTerm;
let sumOfEvenFiboNums = 0;

while (currentTerm < sumOfEvenFiboNumsUpto) {
    sumOfEvenFiboNums = sumOfEvenFiboNums + currentTerm;

    secondPreviousterm = previousTerm + currentTerm;
    previousTerm = secondPreviousterm + currentTerm;
    currentTerm = secondPreviousterm + previousTerm;
}

console.log(sumOfEvenFiboNums);