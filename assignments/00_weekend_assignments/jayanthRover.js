const roverX = 0;
const roverY = 0;
const heading = 0;
const instructions = 3;

const instructionsInString = instructions + "";
let currentHeading = heading;
let currentX = roverX;
let currentY = roverY;

for (let char = 0; char < instructionsInString.length; char++) {
    let singleInstruction = instructionsInString[char];
    singleInstruction = + singleInstruction;

    // changing direction - turning left
    if (singleInstruction === 1) {
        currentHeading = (currentHeading + 3) % 4;
    }
    
    // changing direction - turning right   
    if (singleInstruction === 2) {
        currentHeading = (currentHeading + 1) % 4;
    }
    
    // // changing direction - both right and left
    // if (singleInstruction < 3) {
    //     let numberOfRightTurns = singleInstruction === 1 ? 3 : 1;
    //     currentHeading = (currentHeading + numberOfRightTurns) % 4;
    // }
    
    if (singleInstruction === 3) {
        let offSetX = 0;
        let offSetY = 0;
        switch (currentHeading) {
            case 0:
                offSetY = 1;
                break;
            case 1:
                offSetX = 1;
                break;
            case 2:
                offSetY = -1;
                break;
            case 3:
                offSetX = -1;
                break;
        }
        currentX += offSetX;
        currentY += offSetY;
    }   
}

console.log(currentX, currentY, currentHeading);