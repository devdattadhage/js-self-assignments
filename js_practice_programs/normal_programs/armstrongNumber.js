const armstrongCandidate = 371;
let remainingDigits = armstrongCandidate;
let sumOfPowerOfDigits = 0;
let power = 1;

while(10 ** power < armstrongCandidate) {
    power++;
}

while(remainingDigits > 0) {
    const lastDigit = remainingDigits % 10;
    const powerOfLastDigit = lastDigit ** power;
    sumOfPowerOfDigits = sumOfPowerOfDigits + powerOfLastDigit;
    remainingDigits = (remainingDigits - lastDigit) / 10;
}

const isArmstrong = armstrongCandidate == sumOfPowerOfDigits;

console.log("ArmStrong?", armstrongCandidate, isArmstrong);

