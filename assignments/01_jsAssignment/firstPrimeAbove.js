// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 11;
// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let primeNumCandidate = (a + 1);
let isPrimeNotFound = true;

while (isPrimeNotFound) {

  let factorsCount = 0;

  for (let divisor = 1; divisor <= primeNumCandidate / 2; divisor++) {
    if (primeNumCandidate % divisor === 0) {
      factorsCount = factorsCount + 1;
    }
  }

  if (factorsCount === 1) {
    console.log(primeNumCandidate);
    isPrimeNotFound = false;
  }

  primeNumCandidate++;
}