export class ComplexNumber {
  #real;
  #imaginary;
  constructor(real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  }

  visualizeComplexNum() {
    return `${this.#real} + ${this.#imaginary}i`;
  }
}
