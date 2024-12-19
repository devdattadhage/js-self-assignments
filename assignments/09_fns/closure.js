const f = function () {
  const x = 1;
  return function (y) {
    return x - y;
  }
}

const fx = function (x) {
  return function (y) {
    return x + y;
  }
}

const fun = function () {
  let x = 0;
  return function (name) {
    x++;
    return name + " likes : " + x;
  }
}

const cycle = function () {
  let x = -1;
  return function () {
    x++;
    if (x > 3) {
      x = 0;
    }
    return x;
  }
}

const counter = function () {
  let privateCounter = 0;
  const changeBy = function (val) {
    return privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    }
  }
}

const a = 10;
function sum(b) {
  return function sum2(c) {
    return function sum3(d) {
      return function sum4(e) {
        return function sum5(f) {
          return a + b + c + d + e + f;
        }
      }
    }
  }
}