const roverX = 5;
const roverY = 5;
const heading = 1;
const instructions = 31312333113;

// The above input should leave the Mars Rover at 2 2 0

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let remainingDigits = instructions;
let reverseInstruction = 0;

while (remainingDigits > 0) {
    const lastDigit = remainingDigits % 10;
    reverseInstruction = reverseInstruction * 10 + lastDigit;
    remainingDigits = (remainingDigits - lastDigit) / 10;
}

let cordinateX = roverX;
let cordinateY = roverY;
let facingDirection = heading;

while (reverseInstruction > 0) {
    const singleInstruction = reverseInstruction % 10;
    reverseInstruction = (reverseInstruction - singleInstruction) / 10;

    // move forward to current facingDirection
    if (singleInstruction === 3) {
        if (facingDirection === 0) {
            cordinateY = cordinateY + 1;
        }
        if (facingDirection === 1) {
            cordinateX = cordinateX + 1;
        }
        if (facingDirection === 2) {
            cordinateY = cordinateY - 1;
        }
        if (facingDirection === 3) {
            cordinateX = cordinateX - 1;
        }
    }

    // changing facingDirection - turn right
    if (singleInstruction === 2) {
        if (facingDirection === 3) {
            facingDirection = 0;
            continue;
        }
        facingDirection++;
    }

    // changing facingDirection - turn left
    if (singleInstruction === 1) {
        if (facingDirection === 0) {
            facingDirection = 3;
            continue;
        }
        facingDirection--;
    }

}

console.log(cordinateX, cordinateY, facingDirection);