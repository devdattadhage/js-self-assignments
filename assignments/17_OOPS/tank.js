// make an class Tank in which there are 5 methods :
// moveForward, moveBackward, moveLeft, moveRight , fire .
// Tank class takes the current position as x and y distance from origin point (0,0).
// your goal is to move the tank -
// for data like- [moveLeft,moveForward,moveForward,moveRight] etc.
// to test your Class you can calculate your some own points

class Tank {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveForward() {
    this.y += 1;
  }
  moveBackward() {
    this.y -= 1;
  }
  moveRight() {
    this.x += 1;
  }
  moveLeft() {
    this.x -= 1;
  }
  display() {
    console.log(this.x, this.y);
  }
}

const startTank = () => {
  const tank1 = new Tank(0, 0);
  const tankMoves = ["moveForward", "moveBackward", "moveRight", "moveLeft"];

  tankMoves.forEach((move) => {
    tank1[move]();
  });
  tank1.display();
};

startTank();
