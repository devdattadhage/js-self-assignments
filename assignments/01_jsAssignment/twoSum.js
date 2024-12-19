// Print all pairs of digits in `numberToCheck` which adds up to `target`.
const numberToCheck = 200;
const target = 0;
// For example `numberToCheck` = 1234 and `target` = 5
// Pairs whose sum is 5 are (1, 4) and (2, 3) 
// Your program should print
// 1 4
// 2 3
// or
// 4 1
// 3 2
// As you can see above, order doesn't matter. You can print in any order.
// One line should contain only one pair.
// There should be exactly one space between numbers of a pair.
// You should use console.log(1, 4) to print 1 and 4 on a single line with exactly one space between them.
// If there is no pair that adds up to the target, your program should not print anything.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let remainingDigits = numberToCheck;

while (remainingDigits > 0) {
  const lastDigit = remainingDigits % 10;
  remainingDigits = (remainingDigits - lastDigit) / 10;

  let candidatesForPair = remainingDigits;

  while (candidatesForPair > 0) {
    const possiblePair = candidatesForPair % 10;
    candidatesForPair = (candidatesForPair - possiblePair) / 10;

    if ((lastDigit + possiblePair) === target) {
      console.log(lastDigit, possiblePair);
    }
  }
}