class Rectangle {
  constructor(width, heigth) {
    this.width = width;
    this.heigth = heigth;
  }

  area() {
    return this.width * this.heigth;
  }

  visualize() {
    return ("*".repeat(this.width) + "\n").repeat(this.heigth);
  }
}

const r1 = new Rectangle(10, 5);

console.log(r1);
console.log("area : ", r1.area());
console.log(r1.visualize());

