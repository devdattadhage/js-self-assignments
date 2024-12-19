const nthPrime = 10001;
let primeCount = 2;
let primeNumCandidate = 2;
let primeFound = true;

while (primeFound) {

    let factorsCount = 0;

    if (primeNumCandidate % 6 === 1 || primeNumCandidate % 6 === 5) {
        for (let divisor = 1; divisor <= primeNumCandidate / 2; divisor++) {
            if (primeNumCandidate % divisor === 0) {
                factorsCount = factorsCount + 1;
            }
        }

        if (factorsCount === 1) {
            primeCount++;
        }
        if (primeCount === nthPrime) {
            console.log(primeNumCandidate);
            primeFound = false;
        }
    }
    primeNumCandidate++;
}