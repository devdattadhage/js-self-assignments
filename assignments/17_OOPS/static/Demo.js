class Demo {
  #privatevar = 19;

  #privateMethod() {
    return this.#privatevar;
  }

  static publicMethod() {
    // while running the code remove below comments
    // return this.#privateMethod();
  }
}

const d = new Demo();
console.log(Demo.publicMethod.call(d));
