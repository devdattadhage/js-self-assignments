const summationOfPrimesUpto = 2000000;
let primeNumCandidate = 5;
let summationOfPrime = 5;

while (primeNumCandidate < summationOfPrimesUpto) {

    let factorsCount = 0;
    let i = -1;

    while (i < 0) {
        primeNumCandidate = (6 * multiplier) + i;

        for (let divisor = 1; divisor <= primeNumCandidate / 2; divisor++) {
            if (primeNumCandidate % divisor === 0) {
                factorsCount = factorsCount + 1;
            }
        }

        if (factorsCount === 1) {
            summationOfPrime = summationOfPrime + primeNumCandidate;
        }

        i = 1;
    }

    multiplier++;
}

console.log(summationOfPrime);

// not working for 2 million