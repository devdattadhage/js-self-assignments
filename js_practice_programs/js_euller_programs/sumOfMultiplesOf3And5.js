const sumUpto = 1000;
let sumOfMultiples = 0;

for (let possibleMultiple = 1; possibleMultiple < sumUpto; possibleMultiple++) {
    if((possibleMultiple % 3 === 0) || (possibleMultiple % 5 === 0)) {
        sumOfMultiples = sumOfMultiples + possibleMultiple;
    }
}

console.log(sumOfMultiples);