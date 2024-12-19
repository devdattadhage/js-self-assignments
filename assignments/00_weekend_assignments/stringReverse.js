//Write a function that can take a string and reverse it using reduce!

const stringReverse = function (string) {
  const combine = function (initial, element) {
    return element.concat(initial);
  }

  return [...string].reduce(combine, '');
}

console.log(stringReverse('dev'));