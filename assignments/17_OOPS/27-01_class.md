## Class

- `class` is a blueprint or template for creating objects.(just like a recipe for a dish)
- They encapsulate data with code to work on that data.
- A class needs a constructor to create a template for its instances.
- Except for methods, constructor, and fields you can't write anything inside a class.

```
class demo {
  constructor() {
    this.a = 0;
  }
  console.log("happy");
}

parse error: Unexpected token `.`. Expected * for generator, private key, identifier or async at 5:10
```

#### Constructor

- The `constructor` method is a special method for creating and initializing an object created with a class.
- We can return value in constructor but it is disregarded by `new`.(ie. it is simply ignored)
- In JS, simply referencing a property (like this.india) without assigning it a value does not add it as a key to the object.

```
class Greet {
  constructor() {
    this.india;
    console.log("this is india ", this.india);
    this.pakistan = 0;
    console.log("this is pakistan",this.pakistan);
    this.japan = undefined;
  }
}

const g = new Greet()
o/p : this is india  undefined
      this is pakistan 0

g
o/p : Greet { pakistan: 0, japan: undefined}
```

#### new

- `new` is used for creating an instance of the object using its constructor.
- `new` creates an object and binds all the methods and properties of the class and calls the constructor.

#### Methods

- A method is a function declare inside a class.
- method is bound to a data.

#### Visibility

- public    

  - They can be accessed outside the class using its instance or reference.

- private

  - `#` is used to make field private.
  - The private fields cannot be accessed outside the class using its instance or reference.

  ```
  class Rectangle {
    #width; // private

    constructor(width, heigth) {
      this.#width = width;
      this.heigth = heigth; //  public
    }

    area() {
      return this.#width * this.heigth;
    }
  }
  ```
