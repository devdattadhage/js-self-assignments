export class ComplexNumber {
  #real;
  #imaginary;
  constructor(real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  }

  visualizeHelper() {}

  visualize() {
    return `${this.#real} + ${this.#imaginary}i`;
  }

  add(cn) {
    return new ComplexNumber(
      this.#real + cn.#real,
      this.#imaginary + cn.#imaginary
    );
  }

  sub(cn) {
    return new ComplexNumber(
      this.#real - cn.#real,
      this.#imaginary - cn.#imaginary
    );
  }

  addMultiple(...cns) {
    return cns.reduce((init, cn) => init.add(cn), this);
  }

  subMultiple(...cns) {
    return cns.reduce((init, cn) => init.sub(cn), this);
  }
}
