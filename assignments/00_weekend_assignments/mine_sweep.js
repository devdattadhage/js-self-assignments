// Do not rename minefield, use it as input for your program.
const minefield = "****\n****\n****\n****";

// Clear the mines one by one, always choosing the mine closest to the top left hand corner
// See the README for more details
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const MINE = "*";
const defuse = "+";
const NEWLINE = "\n";
let allMineDefused = false;
let sweepingField = minefield;

while (!allMineDefused) {
  let index = 0;
  let row = 0;
  let nearestposition = Infinity;
  let minePosition = 0;

  while (index < sweepingField.length) {
    let column = 0;

    while (sweepingField[index] !== NEWLINE && index < sweepingField.length) {
      if (sweepingField[index] === MINE) {
        const mineDistance = row + column;
        const isNear = nearestposition > mineDistance;
        nearestposition = isNear ? mineDistance : nearestposition;

        if (isNear) {
          minePosition = index;
        }
      }

      column++;
      index++;
    }

    row++;
    index++;
  }

  if (nearestposition === Infinity) {
    allMineDefused = true;
    continue;
  }

  let defusedField = "";

  for (let currIndex = 0; currIndex < sweepingField.length; currIndex++) {
    const isMinePosEqual = currIndex === minePosition;
    defusedField += isMinePosEqual ? defuse : sweepingField[currIndex];
  }

  console.log(defusedField, "\n");
  sweepingField = defusedField;
}