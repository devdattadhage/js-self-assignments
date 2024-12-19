const primeNumCandidate = 18;
let isPrime = true;

if(primeNumCandidate > 1) {
    for(let i = 2; i <= primeNumCandidate / 2; i++) {
        if(primeNumCandidate % i === 0) {
            isPrime = false;
        }
    }
    console.log("Prime?", primeNumCandidate, isPrime);
}

if(primeNumCandidate === 1) {
    console.log("1 is neither a prime nor composite!");
}
