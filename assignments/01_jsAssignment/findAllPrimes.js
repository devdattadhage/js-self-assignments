// Do not rename startOfRange and endOfRange, use it as input for your program.
// Use them to find all prime numbers between startOfRange and endOfRange (both inclusive).
const startOfRange = 1;
const endOfRange = 40;
// Print all prime numbers between startOfRange and endOfRange
// For example, if startOfRange = 1 and endOfRange = 10, then the output should be
// 2
// 3
// 5
// 7
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

for (let primeNumCandidate = startOfRange; primeNumCandidate <= endOfRange; primeNumCandidate++) {
  let factorsCount = 0;

  for (let divisor = 1; divisor <= primeNumCandidate / 2; divisor++) {
    if (primeNumCandidate % divisor === 0) {
      factorsCount = factorsCount + 1;
    }
  }

  if (factorsCount === 1) {
    console.log(primeNumCandidate);
  }                       
}

