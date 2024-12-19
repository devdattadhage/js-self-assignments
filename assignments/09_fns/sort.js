// const arr = [23, 100, 55];
// const arr = ['dev','Dev','DEV', '.', '', ' ', '*', '#', '!', 'zoro'];

const arr = ['dev', 'atul', 'Dev', 'DEV', '.', '', ' ', '*', 1, 5, 3, 'zoro'];

arr.sort(function (a, b) {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return -1;
  }
  return 1;
});

// ascending order
arr.sort(function (a, b) {
  return a - b;
})

// descending order
arr.sort(function (a, b) {
  return b - a;
})

// reverse
arr.sort(function () {
  return -1;
})

// alphabetical reverse descending
const texts = ['reduce', 'closures', 'map', 'filter'];

texts.sort().sort(function () {
  return -1;
})

// boolean values
const bool = [true, false, false, true, false];

bool.sort(function (a, b) {
  return b - a;
})

// random sort
// const randm = ['nando', 'sakib', 'dev', 'datta', 'aman', 'adil', 'vineet', 'atul'];
const randm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

randm.sort(function () {
  return Math.random() - 0.5;
})

// mixed simple ascending 

const mixed = [2, 3, -1, -2, 1, -3];

mixed.sort(function (a, b) {
  return Math.abs(a) - Math.abs(b);
})

// mixed ascending in ascending

const mixed1 = [2, 3, -1, -2, 1, -3];

mixed1.sort(function (a, b) {
  if (Math.abs(a) === Math.abs(b)) {
    return a - b;
  }

  return Math.abs(a) - Math.abs(b);
})

// mixed descending in descending

const mixed2 = [2, 3, -1, -2, 1, -3];

mixed2.sort(function (a, b) {
  if (Math.abs(a) === Math.abs(b)) {
    return b - a;
  }

  return Math.abs(b) - Math.abs(a);
})