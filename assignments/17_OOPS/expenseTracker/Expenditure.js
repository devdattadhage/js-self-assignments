class Expenditure {
  #dollars;
  #cents;

  constructor(dollars, cents) {
    this.#dollars = dollars;
    this.#cents = cents;
  }

  static parse(expense) {
    const [integral, residual] = expense.toFixed(2).split(".");

    return new Expenditure(parseInt(integral), parseInt(residual));
  }

  add(expense) {
    const totalCents = this.#cents + expense.#cents;
    const totalDollars =
      this.#dollars + expense.#dollars + Math.floor(totalCents / 100);

    return new Expenditure(totalDollars, totalCents % 100);
  }

  display() {
    console.log(`${this.#dollars}.${this.#cents.toString().padStart(2, "0")}`);
  }
}

const sum = (total, expense) => total.add(expense);

export { Expenditure, sum };
