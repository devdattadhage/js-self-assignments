// const numbers = [5, 4, 3, 2, 1];
const numbers = [24, 4, 6, 22, 18];
// const numbers = [13, 39, 300, 12, 10];
// const numbers = [2, 5, 3, 6, 1];
// const numbers = [1, 1, 1, 1, 1];

for (let index = 0; index < numbers.length - 1; index++) {
  for (let subIndex = 0; subIndex < numbers.length - 1; subIndex++) {

    if (numbers[subIndex] > numbers[subIndex + 1]) {
      const helper = numbers[subIndex];
      numbers[subIndex] = numbers[subIndex + 1];
      numbers[subIndex + 1] = helper;
    }
  }
  console.log(numbers);
}