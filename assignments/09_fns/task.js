// Sort numbers as follows. Even numbers should appear 
// before odd numbers. Even numbers should appear in ascending order. 
// Odd numbers should appear in ascending order
const nums = [1, 2, 3, 4, 5];

const isEven = function (num) {
  return num % 2 === 0;
}

const isOdd = function (num) {
  return num % 2 !== 0;
}

nums.sort(function (a, b) {
  return a - b;
})

const even = nums.filter(isEven);
const odd = nums.filter(isOdd);

console.log(even.concat(odd));

//----------------------------------------------------------------------//

const number = [1, 2, 3, 4, 5];

number.sort(function (a, b) {
  if (isOdd(a)) {
    return a - b;
  }

  return b - a;
}).sort(function (a, b) {
  if (isOdd(a)) {
    return 0;
  }

  return a - b;
});

//----------------------------------------------------------------------//

const numbers = [1, 2, 3, 4, 5];

numbers.sort(function (a, b) {
  if (isEven(a) && isOdd(b)) {
    return -1;
  }
  if (isOdd(a) && isEven(b)) {
    return 1;
  }

  return a - b;
})

/*
2 1
3 2
3 1
4 1
4 2
5 1
5 3
*/

// check it on python tutor